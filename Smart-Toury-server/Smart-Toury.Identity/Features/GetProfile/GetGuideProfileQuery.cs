using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain.Users;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.GetProfile;


internal record GetGuideProfileQuery() : IRequest<Result<GuideProfile>>;

internal class GetGuideProfileQueryHandler(IdentityDbContext db, ICurrentUser currentUser, JwtTokenService jwtService) 
    : IRequestHandler<GetGuideProfileQuery, Result<GuideProfile>>
{
    public async Task<Result<GuideProfile>> Handle(GetGuideProfileQuery request, CancellationToken cancellationToken)
    {
        var userId = currentUser.UserId;
        if (!db.Users.Any(u => userId == u.Id))
            return Result<GuideProfile>.Failure("User not found");
        if(db.Users.FirstOrDefaultAsync(x => x.Id == userId, cancellationToken).Result!.Role != UserRole.Guide)
            return Result<GuideProfile>.Failure("User is not guide");

        var guideProfile = await db.GuideProfiles
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.UserId == userId, cancellationToken);
        
        return Result<GuideProfile>.Success(guideProfile!);
    }
}

internal class GetGuideProfileEndpoint()
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapGet("/api/guides/me", async (IMediator mediator, CancellationToken ct) =>
        {
            var profile = await mediator.Send(new GetGuideProfileQuery(), ct);
            return !profile.IsSuccess ? Results.BadRequest(profile.ErrorMessage) : Results.Ok(profile.Value);
        }).RequireAuthorization();
    }
}