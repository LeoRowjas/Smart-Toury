using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.LoginUser;


internal record LoginUserCommand(LoginRequest Request) : IRequest<Result<LoginResponse>>;


internal class LoginUserFeature(IdentityDbContext dbContext, JwtTokenService jwtService, IMediator mediator)
    : IRequestHandler<LoginUserCommand, Result<LoginResponse>>
{
    public async Task<Result<LoginResponse>> Handle(LoginUserCommand command, CancellationToken cancellationToken)
    {
        var user = await dbContext.Users
            .FirstOrDefaultAsync(x => x.Email == command.Request.Email, cancellationToken);

        if (user == null || !user.VerifyPassword(command.Request.Password))
            return Result<LoginResponse>.Failure("Incorrect password");

        var accessToken = jwtService.GenerateAccessToken(user.Id, user.Email, user.Role);
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
        app.MapPost("/api/auth/sessions", async (LoginRequest request, IMediator mediator, CancellationToken ct) =>
        {
            var loginResponse = await mediator
                .Send(new LoginUserCommand(request), ct);

            return loginResponse.IsSuccess
                ? Results.Ok(loginResponse.Value)
                : Results.BadRequest(loginResponse.ErrorMessage);
        });
    }
}