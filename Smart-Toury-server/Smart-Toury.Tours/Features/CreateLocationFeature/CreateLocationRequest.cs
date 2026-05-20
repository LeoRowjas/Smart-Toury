namespace Smart_Toury.Tours.Features.CreateLocationFeature;

internal class CreateLocationRequest
{
    public string Name { get; set; }
    public string Description { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}