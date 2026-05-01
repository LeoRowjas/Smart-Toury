using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Smart_Toury.Identity.Features.LoginUser;
using Smart_Toury.Identity.Features.RegisterUser;
using Smart_Toury.Identity.Infrastructure;

namespace Smart_Toury.Identity;

public static class IdentityModule
{
    public static IServiceCollection AddIdentityModule(this IServiceCollection services, IConfiguration cfg)
    {
        services.AddMediatR(config => 
            config.RegisterServicesFromAssembly(typeof(IdentityModule).Assembly));
        
        services.AddDbContext<IdentityDbContext>(o => 
            o.UseNpgsql(cfg.GetConnectionString("DefaultConnection")));

        services.AddScoped<JwtTokenService>();
        
        return services;
    }

    public static IEndpointRouteBuilder MapIdentityModule(this IEndpointRouteBuilder app)
    {
        RegisterUserEndpoint.MapEndpoint(app);
        LoginUserEndpoint.MapEndpoint(app);
        
        return app;
    }

    public static void ApplyIdentityMigrations(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();
        using var context = scope.ServiceProvider.GetRequiredService<IdentityDbContext>();
        context.Database.Migrate();
    }
}
