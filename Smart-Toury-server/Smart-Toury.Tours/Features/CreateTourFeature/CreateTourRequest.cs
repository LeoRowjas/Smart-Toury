using Smart_Toury.Tours.Domain;

namespace Smart_Toury.Tours.Features.CreateTourFeature;

internal class CreateTourRequest
{
    public string Name { get; set; }
    public string Description { get; set; }
    public int Price { get; set; }
    public int DurationMinutes { get; set; }
    public double DistanceKm { get; set; }
    public CreateTourStopDto[] TourStops { get; set; } 
}

internal class CreateTourStopDto
{
    public Guid LocationId { get; set; }
    public int Order { get; set; }
    public int OffsetMinutes { get; set; }
    public int DurationMinutes { get; set; }
    public string GuideNotes { get; set; } = string.Empty;
}