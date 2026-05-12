namespace Smart_Toury.Identity.Domain.Users;

internal class GuideProfile
{
    public Guid ProfileId { get; set; }
    public Guid UserId { get; set; }
    public string Name { get; set; } = null!;
    public string ShortLine { get; set; } = string.Empty;//историк модерна. кофеман. 
    public string Bio { get; set; } = string.Empty;

    public string[] Tags { get; set; } = [];
    //public bool IsOnline { get; set; } TODO: MAYBE LATER :)))
    
    public int ToursCount { get; set; } //TODO: удалить все четыре поля из сущности и считать их на лету в сервисе
    public double Rating { get; set; }
    public int GuestsCount { get; set; }
    public int ReviewsCount { get; set; }
    
    //public List<GuideExperience> Experiences {get;set;} TODO: надо бы сделать образование гидам но позже не в МВП
    
    private GuideProfile() {}

    public static GuideProfile Create(Guid userId, string name) => new()
    {
        ProfileId = Guid.NewGuid(),
        UserId = userId,
        Name = name,
        Tags = []
    };

    public void Update(string name, string shortLine, string bio, string[] tags)
    {
        Name = name;
        ShortLine = shortLine;
        Bio = bio;
        Tags = tags;
    }
}