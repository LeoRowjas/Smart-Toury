namespace Smart_Toury.Tours.Features.GetLocationFeature;

internal class LocationSearchResponse(List<LocationDto> locations)
{
    public List<LocationDto> Locations { get; set; } = locations;
}

internal class LocationDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}