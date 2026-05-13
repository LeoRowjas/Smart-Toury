using Smart_Toury.Identity.Features.UpdateProfileFeature;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Domain.Users;

internal class TouristProfile
{
    public Guid ProfileId { get; private set; }
    public Guid UserId { get; private set; }
    public string Name { get; internal set; } = null!;
    public DateTime CreatedAt { get; private set; }

    public int CompletedTours { get; private set; }
    public int ReviewsLeft { get; private set; }
    public int FavoritesCount { get; private set; }
    public int AchievementsCount { get; private set; }
    //public bool IsOnline { get; private set; } TODO: maybe later :)

    public TouristTravelStats Stats { get; private set; }
    public TouristPreferences Preferences { get; private set; }

    private TouristProfile() { } // Для EF Core

    public static TouristProfile Create(Guid userId, DateTime registeredAt, string name) => new(){
        ProfileId = Guid.NewGuid(),
        UserId = userId,
        CreatedAt = registeredAt,
        Name = name,
        Stats = new TouristTravelStats(),
        Preferences = new  TouristPreferences(),
    };

    public void Update(string name, AccessibilityMode accessibility, RouteAtmosphere atmosphere, bool receiveNotifications)
    {
        Name = name;
        Preferences.AccessibilityMode = accessibility;
        Preferences.RouteAtmosphere = atmosphere;
        Preferences.ReceiveDiscountNotifications = receiveNotifications;
    }

    //TODO: слушать событие при завершении тура обновлять стастику
}

internal class TouristTravelStats
{
    public int CountriesVisited { get; set; }
    public int CitiesVisited { get; set; }
    public double DistanceCoveredKm { get; set; }
    public int HoursInTours { get; set; }
    public double Rating { get; set; }
    public int ActivityLevelPercentage { get; set; }
}

internal class TouristPreferences
{
    public AccessibilityMode AccessibilityMode { get; set; }
    public RouteAtmosphere RouteAtmosphere { get; set; }
    public bool ReceiveDiscountNotifications { get; set; }
}