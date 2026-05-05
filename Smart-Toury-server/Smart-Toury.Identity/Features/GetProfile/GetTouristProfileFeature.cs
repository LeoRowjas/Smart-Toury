using System.Security.Claims;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain.Users;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.GetProfile;


internal record GetTouristProfileCommand() : IRequest<Result<TouristProfile>>;


internal class GetTouristProfileFeature(IdentityDbContext db, IHttpContextAccessor httpContextAccessor, JwtTokenService jwtService) 
    : IRequestHandler<GetTouristProfileCommand, Result<TouristProfile>>
{
    public async Task<Result<TouristProfile>> Handle
        (GetTouristProfileCommand request, CancellationToken cancellationToken)
    {
        var userId = jwtService.GetUserId(httpContextAccessor.HttpContext!.User);
        
        if(!db.Users.Any(u => u.Id == userId))
            return Result<TouristProfile>.Failure("User not found");
        
        var profile = await db.TouristProfiles
            .AsNoTracking()
            .FirstOrDefaultAsync(u => u.Id == userId, cancellationToken: cancellationToken);
        
        return Result<TouristProfile>.Success(profile);
    }
}

internal class GetTouristProfileEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapGet("/api/tourists/me", async (IMediator mediator, CancellationToken ct) =>
        {
            var profile = await mediator.Send(new GetTouristProfileCommand(), ct);
            return !profile.IsSuccess ? Results.BadRequest(profile.ErrorMessage) : Results.Ok(profile.Value);
        }).RequireAuthorization();
    }
}
