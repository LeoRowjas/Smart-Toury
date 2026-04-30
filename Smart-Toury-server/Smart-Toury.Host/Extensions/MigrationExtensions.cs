using Microsoft.AspNetCore.Builder;
using Smart_Toury.Identity;

namespace Smart_Toury.Host.Extensions;

public static class MigrationExtensions
{
    public static void ApplyAllModulesMigrations(this IApplicationBuilder app)
    {
        //Just for clean code, write here all migration methods and then use this extension in program
        app.ApplyIdentityMigrations();
    }
}
