using MediatR;
using Smart_Toury.Identity.Domain.Users;
using Smart_Toury.Identity.Contracts.Events;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.RegisterUser;

internal record RegisterUserCommand(string Email, string Name, string Password, UserRole Role) 
    : IRequest<Result<RegisterResponse>>;

internal class RegisterUserHandler(IdentityDbContext db, JwtTokenService jwtService, IMediator mediator)
    : IRequestHandler<RegisterUserCommand, Result<RegisterResponse>>
{
    public async Task<Result<RegisterResponse>> Handle(RegisterUserCommand request, CancellationToken ct)
    {
        if (await db.Users.AnyAsync(x => x.Email == request.Email, ct))
            return Result<RegisterResponse>.Failure("Email already in use");

        User user;
        switch (request.Role)
        {
            case UserRole.Guide:
                user = User.CreateGuide(request.Email, request.Name, request.Password);
                break;
            case UserRole.Tourist:
                user = User.CreateTourist(request.Email, request.Name, request.Password);
                break;
            case UserRole.Admin:
            default:
                return Result<RegisterResponse>.Failure("!Admin can not be created!");
        }
        
        await db.Users.AddAsync(user, ct);
        await db.SaveChangesAsync(ct);
        
        var integrationEvent = new UserRegisteredIntegrationEvent(user.Id, user.CreatedAt, user.Name, user.Role);
        await mediator.Publish(integrationEvent, ct);

        var token = jwtService.GenerateAccessToken(user.Id, user.Email, user.Role);
        var refreshToken = RefreshToken.Create(user.Id, jwtService.GenerateRefreshToken());
        
        var response = new RegisterResponse()
        {
            UserId =  user.Id,
            AccessToken = token,
            RefreshToken = refreshToken.Token,
            ExpiresAt = DateTime.UtcNow.AddSeconds(900),
        };
        
        return Result<RegisterResponse>.Success(response);
    }
}

internal static class RegisterUserEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapPost("/api/users", async (RegisterUserCommand command, IMediator mediator, CancellationToken ct) =>
        {
            var registerResponse = await mediator.Send(command, ct);
            if (!registerResponse.IsSuccess)
                return Results.BadRequest(registerResponse.ErrorMessage);
            
            var response = registerResponse.Value;
            return Results.Ok(response);
        });
    }
}
