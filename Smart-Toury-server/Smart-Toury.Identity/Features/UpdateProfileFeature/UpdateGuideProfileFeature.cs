using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.UpdateProfileFeature;

internal record UpdateGuideProfileCommand(UpdateGuideRequest Request) : IRequest<Result<UpdateGuideResponse>>;

internal class UpdateGuideProfileFeature(IdentityDbContext db, ICurrentUser user)
    : IRequestHandler<UpdateGuideProfileCommand, Result<UpdateGuideResponse>>
{
    private readonly ICurrentUser _currentUser = user;
    
    public async Task<Result<UpdateGuideResponse>> Handle(UpdateGuideProfileCommand command, CancellationToken cancellationToken)
    {
        var profile = await db.GuideProfiles
            .FirstOrDefaultAsync(p => p.UserId == _currentUser.UserId, cancellationToken);

        if (profile == null)
            return Result<UpdateGuideResponse>.Failure("User nof found");
        
        var (name, shortLine, bio, tags) = command.Request;
        profile.Update(name, shortLine, bio, tags);
        await db.SaveChangesAsync(cancellationToken);

        var response = new UpdateGuideResponse()
        {
            Name = profile.Name,
            ProfileId = profile.ProfileId,
            UserId = profile.UserId,
            ShortLine = profile.ShortLine,
            Bio = profile.Bio,
            Tags = profile.Tags,
        };
        
        return Result<UpdateGuideResponse>.Success(response);
    }
}

internal class UpdateGuideProfileEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapPut("/api/guides/me", 
            async (IMediator mediator, UpdateGuideRequest request, CancellationToken cancellationToken) =>
            {
                var command =  new UpdateGuideProfileCommand(request);
                var profile = await mediator.Send(command, cancellationToken);
                return profile.IsSuccess ? Results.Ok(profile.Value) : Results.BadRequest(profile.ErrorMessage);
            }
        ).RequireAuthorization("Guide");
    }
}