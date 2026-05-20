using System.Security.Claims;
using SmartToury.SharedKernel;

namespace Smart_Toury.Host.Extensions;

public sealed class CurrentUser : ICurrentUser
{
    private readonly IHttpContextAccessor _contextAccessor;

    public CurrentUser(IHttpContextAccessor contextAccessor)
    {
        _contextAccessor = contextAccessor;
    }

    public Guid UserId => Guid.TryParse(_contextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier), out var id) 
        ? id 
        : throw new UnauthorizedAccessException("User is not authenticated.");
}

public static class CurrentUserRegistration
{
    public static IServiceCollection AddCurrentUser(this IServiceCollection services)
    {
        services.AddHttpContextAccessor();
        services.AddScoped<ICurrentUser, CurrentUser>();
        return services;
    }
}