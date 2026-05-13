namespace Smart_Toury.Tours.Domain;

internal class Tour
{
    public Guid Id { get; set; }
    public Guid GuideId { get; set; }
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public int Price { get; set; }
    public int DurationMinutes { get; set; }
    public double DistanceKm { get; set; }
    
    private Tour() { }

    public static Tour Create
        (Guid guideId, string name, string description, int price, int durationMinutes, double distanceKm)
    {
        return new Tour()
        {
            Id = Guid.NewGuid(),
            GuideId = guideId,
            Name = name,
            Description = description,
            Price = price,
            DurationMinutes = durationMinutes,
            DistanceKm = distanceKm,
        };
    }

    public void Update
        (string name, string description, int price, int durationMinutes, double distanceKm)
    {
        Name = name;
        Description = description;
        Price = price;
        DurationMinutes = durationMinutes;
        DistanceKm = distanceKm;
    }
}