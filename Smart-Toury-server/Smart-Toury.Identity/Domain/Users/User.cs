using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Domain.Users;

internal class User
{
    public Guid Id { get; private set; }
    public string Email { get; private set; } = null!;
    public string Name { get; private set; } = null!;
    public string PasswordHash { get; private set; } = null!;
    public string PhoneNumber { get; private set; } = null!;
    public int Age { get; set; }
    public DateTime CreatedAt { get; set; }
    public UserRole Role { get; set; }
    public Gender Gender { get; set; }

    private User() { }

    public static User CreateTourist(string email, string name, string password, string phone = "")
    {
        return new User()
        {
            Id = Guid.NewGuid(),
            Email =  email,
            Name = name,
            Role = UserRole.Tourist,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(password),
            CreatedAt =  DateTime.UtcNow,
            PhoneNumber = phone
        };
    }

    public static User CreateGuide(string email, string name, string password, string phone = "")
    {
        return new User()
        {
            Id = Guid.NewGuid(),
            Email =  email,
            Name = name,
            Role = UserRole.Guide,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(password),
            CreatedAt =  DateTime.UtcNow,
            PhoneNumber = phone
        };
    }

    public bool VerifyPassword(string password)
    {
        return BCrypt.Net.BCrypt.Verify(password, PasswordHash);
    }
}