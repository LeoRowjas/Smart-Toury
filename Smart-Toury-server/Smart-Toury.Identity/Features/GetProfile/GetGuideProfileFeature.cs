using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain.Users;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.GetProfile;


internal record GetGuideProfileCommand() : IRequest<Result<GuideProfile>>;


internal class GetGuideProfileFeature(IdentityDbContext db, IHttpContextAccessor httpContextAccessor, JwtTokenService jwtService) 
    : IRequestHandler<GetGuideProfileCommand, Result<GuideProfile>>
{
    public async Task<Result<GuideProfile>> Handle(GetGuideProfileCommand request, CancellationToken cancellationToken)
    {
        var userId = jwtService.GetUserId(httpContextAccessor.HttpContext!.User);
        if (!db.Users.Any(u => userId == u.Id))
            return Result<GuideProfile>.Failure("User not found");

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
            var profile = await mediator.Send(new GetGuideProfileCommand(), ct);
            return !profile.IsSuccess ? Results.BadRequest(profile.ErrorMessage) : Results.Ok(profile.Value);
        }).RequireAuthorization();
    }
}