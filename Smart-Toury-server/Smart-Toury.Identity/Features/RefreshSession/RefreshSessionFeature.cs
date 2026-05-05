using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain;
using Smart_Toury.Identity.Features.LoginUser;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.RefreshSession;

internal record RefreshSessionCommand(string RefreshToken) : IRequest<Result<LoginResponse>>;

internal class RefreshSessionFeature(IdentityDbContext dbContext, JwtTokenService jwtService)
    : IRequestHandler<RefreshSessionCommand, Result<LoginResponse>>
{
    public async Task<Result<LoginResponse>> Handle(RefreshSessionCommand request, CancellationToken cancellationToken)
    {
        var storedToken = await dbContext.RefreshTokens
            .FirstOrDefaultAsync(rt => rt.Token == request.RefreshToken, cancellationToken);
        
        if (storedToken == null || storedToken.ExpiresAt < DateTime.UtcNow)
            return Result<LoginResponse>.Failure("Invalid or expired refresh token");

        var user = await dbContext.Users
            .FirstOrDefaultAsync(u => u.Id == storedToken.UserId, cancellationToken);

        if (user == null)
            return Result<LoginResponse>.Failure("User not found");

        var accessToken = jwtService.GenerateAccessToken(user.Id, user.Email, user.Role);
        var newRefreshTokenValue = jwtService.GenerateRefreshToken();
        
        // Token rotation: удаляем старый, добавляем новый
        dbContext.RefreshTokens.Remove(storedToken);
        var newRefreshToken = RefreshToken.Create(user.Id, newRefreshTokenValue);
        await dbContext.RefreshTokens.AddAsync(newRefreshToken, cancellationToken);
        
        await dbContext.SaveChangesAsync(cancellationToken);

        return Result<LoginResponse>.Success(new LoginResponse
        {
            AccessToken = accessToken,
            RefreshToken = newRefreshTokenValue,
            ExpiresAt = DateTime.UtcNow.AddSeconds(900)
        });
    }
}

internal static class RefreshSessionEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapPost("/api/auth/refresh", async (RefreshSessionCommand request, IMediator mediator, CancellationToken ct) =>
        {
            var response = await mediator.Send(request, ct);
            return !response.IsSuccess ? Results.BadRequest(response.ErrorMessage) : Results.Ok(response.Value);
        });
    }
}

