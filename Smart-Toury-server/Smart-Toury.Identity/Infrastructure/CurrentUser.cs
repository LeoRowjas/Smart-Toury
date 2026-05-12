using Microsoft.AspNetCore.Http;
using SmartToury.SharedKernel;

namespace Smart_Toury.Identity.Infrastructure;

internal class CurrentUser(IHttpContextAccessor httpContext, JwtTokenService jwtService) 
    : ICurrentUser
{
    public Guid UserId => jwtService.GetUserId(httpContext.HttpContext!.User);
    public UserRole Role => jwtService.GetUserRole(httpContext.HttpContext!.User);
}