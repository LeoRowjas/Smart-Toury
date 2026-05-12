namespace SmartToury.SharedKernel;

public interface ICurrentUser
{
    Guid UserId { get; }
    UserRole Role { get; }
}