using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.UpdateProfileFeature;

internal record UpdateTouristRequest(
    string Name,
    AccessibilityMode AccessibilityMode,
    RouteAtmosphere RouteAtmosphere,
    bool ReceiveDiscountNotifications
);