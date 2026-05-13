namespace Smart_Toury.Tours.Domain;

internal class Location
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public string Description { get; set; } = string.Empty;
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    
    private Location() {}

    public static Location Create(string locationName, string description, double latitude, double longitude)
    {
        return new Location()
        {
            Id = Guid.NewGuid(),
            Name = locationName,
            Description = description,
            Latitude = latitude,
            Longitude = longitude,
        };
    }
}