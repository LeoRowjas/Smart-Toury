using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Smart_Toury.Tours.Features.CreateLocationFeature;
using Smart_Toury.Tours.Features.CreateTourFeature;
using Smart_Toury.Tours.Features.DeleteTourFeature;
using Smart_Toury.Tours.Features.GetAllToursFeature;
using Smart_Toury.Tours.Features.GetLocationFeature;
using Smart_Toury.Tours.Features.GetMyToursFeature;
using Smart_Toury.Tours.Features.GetTourFeature;
using Smart_Toury.Tours.Infrastructure;

namespace Smart_Toury.Tours;

public static class ToursModule
{
    public static IServiceCollection AddToursModule(this IServiceCollection services, IConfiguration cfg)
    {
        services.AddMediatR(config => 
            config.RegisterServicesFromAssembly(typeof(ToursModule).Assembly));
        
        services.AddDbContext<ToursDbContext>(o => 
            o.UseNpgsql(cfg.GetConnectionString("DefaultConnection")));
        
        return services;
    }

    public static IEndpointRouteBuilder MapToursModule(this IEndpointRouteBuilder app)
    {
        GetTourEndpoint.MapEndpoint(app);
        GetToursFeedEndpoint.MapEndpoint(app);
        GetLocationsBySearchEndpoint.MapEndpoint(app);
        DeleteTourEndpoint.MapEndpoint(app);
        CreateTourEndpoint.MapEndpoint(app);
        CreateLocationEndpoint.MapEndpoint(app);
        GetMyToursEndpoint.MapEndpoint(app);
        
        return app;
    }

    public static void ApplyTourMigrations(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();
        using var context = scope.ServiceProvider.GetRequiredService<ToursDbContext>();
        context.Database.Migrate();
    }
}