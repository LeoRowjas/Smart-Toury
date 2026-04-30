namespace Smart_Toury.Identity.Domain.Users;

internal class User
{
    public Guid Id { get; private set; }
    public string Email { get; private set; } = null!;
    public string Name { get; private set; } = null!;
    public string PasswordHash { get; private set; } = null!;
    public string PhoneNumber { get; private set; } = null!;
    public int Age { get; set; }
    public Gender Gender { get; set; }

    private User() { }

    public static User Create(string email, string name, string password, string phone = "")
    {
        return new User()
        {
            Id = Guid.NewGuid(),
            Email =  email,
            Name = name,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(password),
            PhoneNumber = phone
        };
    }
}

internal enum Gender
{
    Male,
    Female
}
