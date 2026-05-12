namespace Smart_Toury.Identity.Features.UpdateProfileFeature;

internal record UpdateGuideRequest (
    string Name,
    string ShortLine,
    string Bio,
    string[] Tags
);