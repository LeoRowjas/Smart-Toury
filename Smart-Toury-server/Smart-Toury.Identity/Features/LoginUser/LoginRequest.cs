namespace Smart_Toury.Identity.Features.LoginUser;

internal record LoginRequest
{
    public string Email { get; set; }
    public string Password { get; set; }
}