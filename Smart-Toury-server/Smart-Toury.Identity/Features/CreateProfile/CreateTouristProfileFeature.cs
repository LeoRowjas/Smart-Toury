using MediatR;
using Smart_Toury.Identity.Contracts.Events;
using Smart_Toury.Identity.Domain.Users;
using Smart_Toury.Identity.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.CreateProfile;


internal class CreateTouristProfileFeature(IdentityDbContext db) : INotificationHandler<UserRegisteredIntegrationEvent>
{
    public async Task Handle(UserRegisteredIntegrationEvent notification, CancellationToken cancellationToken)
    {
        if (notification.Role is not UserRole.Tourist)
            return;
        
        var tourist = TouristProfile.Create(notification.UserId, notification.CreatedAt, notification.Name);
        await db.AddAsync(tourist, cancellationToken);
        await db.SaveChangesAsync(cancellationToken);
    }
}