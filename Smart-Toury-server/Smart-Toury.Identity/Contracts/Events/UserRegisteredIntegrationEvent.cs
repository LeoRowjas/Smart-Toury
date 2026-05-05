using MediatR;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Contracts.Events;

public record UserRegisteredIntegrationEvent(Guid UserId, DateTime CreatedAt, string Name, UserRole Role) 
    : INotification;
