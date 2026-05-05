namespace Smart_Toury.Identity.Domain;

internal class RefreshToken
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Token { get; set; } = null!;
    
    public DateTime ExpiresAt { get; set; }

    private RefreshToken() { }

    public static RefreshToken Create(Guid userId, string token) => new()
    {
        Id = Guid.NewGuid(),
        UserId = userId,
        Token = token,
        ExpiresAt = DateTime.UtcNow.AddDays(30)
    };
    
    public bool IsExpired => DateTime.UtcNow > ExpiresAt;
}