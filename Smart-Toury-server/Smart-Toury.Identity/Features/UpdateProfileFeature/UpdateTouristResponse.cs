using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.UpdateProfileFeature;

internal record UpdateTouristResponse
{
    public Guid ProfileId { get; set; }
    public Guid UserId { get; set; }
    public string Name { get; set; }
    public AccessibilityMode AccessibilityMode { get; set; }
    public RouteAtmosphere RouteAtmosphere { get; set; }
    public bool ReceiveNotifications { get; set; }
}