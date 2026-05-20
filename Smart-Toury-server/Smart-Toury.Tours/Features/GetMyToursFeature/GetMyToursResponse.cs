namespace Smart_Toury.Tours.Features.GetMyToursFeature;


internal class GetMyToursResponse
{
    public List<MyTourDto> Tours { get; set; }
}

internal class MyTourDto
{
    public Guid TourId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Price { get; set; }
}