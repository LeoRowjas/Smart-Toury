using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.UpdateProfileFeature;


internal record UpdateTouristProfileCommand(UpdateTouristRequest TouristRequest) : IRequest<Result<UpdateTouristResponse>>;

internal class UpdateTouristProfileFeature(IdentityDbContext db, ICurrentUser currentUser)
    : IRequestHandler<UpdateTouristProfileCommand, Result<UpdateTouristResponse>>
{
    public async Task<Result<UpdateTouristResponse>> Handle(UpdateTouristProfileCommand command,
        CancellationToken cancellationToken)
    {
        var tourist = await db.TouristProfiles
            .FirstOrDefaultAsync(x => x.UserId == currentUser.UserId, cancellationToken);
        if (tourist == null)
            return Result<UpdateTouristResponse>.Failure("User not found");
        
        var (name, accessibilityMode, routeAtmosphere, receiveNotifications) = command.TouristRequest;
        tourist.Update(name, accessibilityMode, routeAtmosphere, receiveNotifications);
        await db.SaveChangesAsync(cancellationToken);

        var response = new UpdateTouristResponse()
        {
            ProfileId = tourist.ProfileId,
            UserId = tourist.UserId,
            Name = tourist.Name,
            ReceiveNotifications = tourist.Preferences.ReceiveDiscountNotifications,
            RouteAtmosphere = tourist.Preferences.RouteAtmosphere,
            AccessibilityMode = tourist.Preferences.AccessibilityMode
        };

        return Result<UpdateTouristResponse>.Success(response);
    }
}

internal class UpdateTouristProfileEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapPut("/api/tourists/me",
            async (IMediator mediator, UpdateTouristRequest request, CancellationToken cancellationToken) =>
            {
                var command = new UpdateTouristProfileCommand(request);
                var profile = await mediator.Send(command, cancellationToken);
                return profile.IsSuccess ? Results.Ok(profile.Value) : Results.BadRequest(profile.ErrorMessage);
            }
        ).RequireAuthorization("Tourist");
    }
}