using MediatR;
using Smart_Toury.Identity.Domain.Users;
using Smart_Toury.Identity.Contracts.Events;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Infrastructure.Database;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.RegisterUser;

internal record RegisterUserCommand(string Email, string Name, string Password) : IRequest<Result<Guid>>;

internal class RegisterUserHandler : IRequestHandler<RegisterUserCommand, Result<Guid>>
{
    private readonly IdentityDbContext _db;
    private readonly IMediator _mediator;

    public RegisterUserHandler(IdentityDbContext db, IMediator mediator)
    {
        _db = db;
        _mediator = mediator;
    }

    public async Task<Result<Guid>> Handle(RegisterUserCommand request, CancellationToken ct)
    {
        if (await _db.Users.AnyAsync(x => x.Email == request.Email, ct))
            return Result<Guid>.Failure("Email already in use");
        
        var user = User.Create(request.Email, request.Name,  request.Password);
        
        await _db.Users.AddAsync(user, ct);
        await _db.SaveChangesAsync(ct);
        
        var integrationEvent = new UserRegisteredIntegrationEvent(user.Id, user.Email);
        await _mediator.Publish(integrationEvent, ct);
        
        return Result<Guid>.Success(user.Id);
    }
}

internal static class RegisterUserEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapPost("/api/identity/register", async (RegisterUserCommand command, IMediator mediator, CancellationToken ct) =>
        {
            var registerResponse = await mediator.Send(command, ct);
            if (!registerResponse.IsSuccess)
                return Results.BadRequest(registerResponse.ErrorMessage);
            
            var userId = registerResponse.Value;
            return Results.Ok(new { UserId = userId });
        });
    }
}
