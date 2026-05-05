namespace Smart_Toury.Identity.Features.RegisterUser;

internal class RegisterResponse
{
    public Guid UserId { get; init; }
    public string AccessToken { get; init; }
    public string RefreshToken { get; init; }
    public DateTime ExpiresAt { get; init; }
}