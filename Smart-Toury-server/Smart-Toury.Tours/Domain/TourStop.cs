namespace Smart_Toury.Tours.Domain;

internal class TourStop
{
    public Guid Id { get; set; }
    public Guid TourId { get; set; }
    public Guid LocationId { get; set; }
    public int Order { get; set; }
    public int OffsetMinutes { get; set; }
    public int DurationMinutes { get; set; }
    public string GuideNotes { get; set; } = string.Empty;
    
    private TourStop() { }

    public static TourStop Create
        (Guid tourId, Guid locationId, int order, int offsetMinutes, int durationMinutes, string guideNotes)
    {
        return new TourStop
        {
            Id = Guid.NewGuid(),
            TourId = tourId,
            LocationId = locationId,
            Order = order,
            OffsetMinutes = offsetMinutes,
            DurationMinutes = durationMinutes,
            GuideNotes = guideNotes
        };
    }
}