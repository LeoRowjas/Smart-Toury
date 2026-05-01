using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.LoginUser;


internal record LoginUserCommand(string email, string password) : IRequest<Result<LoginResponse>>;


internal class LoginUserFeature(IdentityDbContext dbContext, JwtTokenService jwtService, IMediator mediator)
    : IRequestHandler<LoginUserCommand, Result<LoginResponse>>
{
    public async Task<Result<LoginResponse>> Handle(LoginUserCommand request, CancellationToken cancellationToken)
    {
        var user = await dbContext.Users
            .FirstOrDefaultAsync(x => x.Email == request.email, cancellationToken);

        if (user == null || !user.VerifyPassword(request.password))
            return Result<LoginResponse>.Failure("Incorrect password");

        var accessToken = jwtService.GenerateAccessToken(user.Id, user.Email);
        var refreshTokenValue = jwtService.GenerateRefreshToken();

        var refreshToken = RefreshToken.Create(user.Id, refreshTokenValue);
        await dbContext.RefreshTokens.AddAsync(refreshToken, cancellationToken);
        await dbContext.SaveChangesAsync(cancellationToken);

        var loginResponse = new LoginResponse()
        {
            AccessToken  = accessToken,
            RefreshToken = refreshTokenValue,
            ExpiresAt = DateTime.UtcNow.AddSeconds(900),
        };
        
        return Result<LoginResponse>.Success(loginResponse);
    }
}

internal static class LoginUserEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapPost("/api/identity/login", async (LoginUserCommand request, IMediator mediator, CancellationToken ct) =>
        {
            var loginResponse = await mediator
                .Send(new LoginUserCommand(request.email, request.password), ct);
            
            if(!loginResponse.IsSuccess)
                return Results.BadRequest(loginResponse.ErrorMessage);
            
            return Results.Ok(loginResponse.Value);
        });
    }
}