using Microsoft.AspNetCore.Diagnostics;

namespace Smart_Toury.Host.Extensions;

public class GlobalExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        Console.WriteLine($"[CRITICAL] Ошибка: {exception.Message}");
        
        httpContext.Response.StatusCode = 500; 
        
        var responseInfo = new 
        {
            Error = "Произошла непредвиденная ошибка на сервере.",
            Detail = exception.Message // убрать в продакшене!
        };
        
        await httpContext.Response.WriteAsJsonAsync(responseInfo, cancellationToken);

        return true; 
    }
}