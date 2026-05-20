using Microsoft.AspNetCore.Builder;
using Smart_Toury.Identity;
using Smart_Toury.Tours;

namespace Smart_Toury.Host.Extensions;

public static class MigrationExtensions
{
    public static void ApplyAllModulesMigrations(this IApplicationBuilder app)
    {
        app.ApplyIdentityMigrations();
        app.ApplyTourMigrations();
    }
}
