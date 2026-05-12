namespace Smart_Toury.Identity.Features.UpdateProfileFeature;

internal record UpdateGuideResponse
{
    public Guid ProfileId { get; set; }
    public Guid UserId { get; set; }
    public string Name { get; set; }
    public string Bio { get; set; }
    public string ShortLine { get; set; }
    public string[] Tags { get; set; }
}