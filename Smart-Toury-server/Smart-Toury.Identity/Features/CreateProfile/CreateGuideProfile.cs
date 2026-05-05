using MediatR;
using Smart_Toury.Identity.Contracts.Events;
using Smart_Toury.Identity.Domain.Users;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.CreateProfile;

internal class CreateGuideProfile(IdentityDbContext db) : INotificationHandler<UserRegisteredIntegrationEvent>
{
    public async Task Handle(UserRegisteredIntegrationEvent notification, CancellationToken cancellationToken)
    {
        if (notification.Role is not UserRole.Guide)
            return;
        
        var guide = GuideProfile.Create(notification.UserId, notification.Name);
        await db.AddAsync(guide, cancellationToken);
        await db.SaveChangesAsync(cancellationToken);
    }
}