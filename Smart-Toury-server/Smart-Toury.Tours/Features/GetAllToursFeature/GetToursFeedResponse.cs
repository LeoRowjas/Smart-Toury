namespace Smart_Toury.Tours.Features.GetAllToursFeature;

public class GetToursFeedResponse
{
    public List<TourFeedItem> Tours { get; set; }
}

public class TourFeedItem
{
    public Guid Id { get; set; }
    public Guid GuideId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Price { get; set; }
    public int DurationMinutes { get; set; }
    public double DistanceKm { get; set; }
}