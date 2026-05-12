using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Features.RegisterUser;

internal record RegisterRequest
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public UserRole Role { get; set; }
}