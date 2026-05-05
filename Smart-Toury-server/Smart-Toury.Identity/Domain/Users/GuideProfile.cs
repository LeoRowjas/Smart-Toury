namespace Smart_Toury.Identity.Domain.Users;

internal class GuideProfile
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Name { get; set; } = null!;
    public string ShortLine { get; set; } //историк модерна. кофеман. 
    public string Bio { get; set; }
    public string[] Tags { get; set; }
    //public bool IsOnline { get; set; } TODO: MAYBE LATER :)))
    
    public int ToursCount { get; set; }
    public double Rating { get; set; }
    public int GuestsCount { get; set; }
    public int ReviewsCount { get; set; }
    
    //public List<GuideExperience> Experiences {get;set;} TODO: надо бы сделать образование гидам но позже не в МВП
    
    private GuideProfile() {}

    public static GuideProfile Create(Guid userId, string name) => new()
    {
        Id = Guid.NewGuid(),
        UserId = userId,
        Name = name,
    };
}