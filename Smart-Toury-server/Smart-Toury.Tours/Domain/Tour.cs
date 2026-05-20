using System.IO.Compression;

namespace Smart_Toury.Tours.Domain;

internal class Tour
{
    public Guid Id { get; set; }
    public Guid GuideId { get; set; }
    public string Name { get; set; } = null!;
    public string Description { get; set; } = string.Empty;
    public int Price { get; set; }
    public int DurationMinutes { get; set; }
    public double DistanceKm { get; set; }
    public bool IsArchived { get; set; }
    
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
            IsArchived = false
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

    public void Archive() => IsArchived = true;
    public void Unarchive() => IsArchived = false;
}