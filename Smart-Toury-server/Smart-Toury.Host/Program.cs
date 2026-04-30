namespace Smart_Toury.Host;

using Smart_Toury.Identity;
using Smart_Toury.Host.Extensions;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        
        #region MODULES REGISTRATION
        builder.Services.AddIdentityModule(builder.Configuration);
        #endregion
        
        builder.Services.AddAuthorization();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        
        var app = builder.Build();
        
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();
        
        #region MODULES CONNECTION
        app.MapIdentityModule();
        #endregion
        
        //Apply migration for all modules
        app.ApplyAllModulesMigrations();
        
        app.Run();
    }
}