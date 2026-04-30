using MediatR;

namespace Smart_Toury.Identity.Contracts.Events;

public record UserRegisteredIntegrationEvent(Guid UserId, string Email) : INotification;
