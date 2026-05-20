using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

using Smart_Toury.Identity;
using Smart_Toury.Tours;
using Smart_Toury.Host.Extensions;

namespace Smart_Toury.Host;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        
        #region MODULES REGISTRATION
        builder.Services.AddIdentityModule(builder.Configuration);
        builder.Services.AddToursModule(builder.Configuration);
        #endregion
        builder.Services.AddCurrentUser();

        builder.Services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                
                ValidateAudience = true,
                ValidAudience = builder.Configuration["Jwt:Audience"],
                
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero,
                
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Secret"]!))
            };
        });
        
        builder.Services.AddAuthorization(x =>
        {
            x.AddPolicy("Guide", policy =>
                policy.RequireRole("Guide"));
            
            x.AddPolicy("Admin", policy => 
                policy.RequireRole("Admin"));
            
            x.AddPolicy("Tourist", policy =>
                policy.RequireRole("Tourist"));
        });

        builder.Services.AddCors(x =>
        {
            x.AddDefaultPolicy(policy =>
            {
                policy.WithOrigins("http://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });
        });
        
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(options =>
        {
            options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Name = "Authorization",
                Type = SecuritySchemeType.Http,
                Scheme = "Bearer",
                BearerFormat = "JWT",
                In = ParameterLocation.Header,
                Description = "Введите ваш JWT токен. Олово 'Bearer' подставится автоматически."
            });
        
            options.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                    },
                    []
                }
            });
        });
        
        builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
        builder.Services.AddProblemDetails();
        
        var app = builder.Build();
        
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        
        app.UseExceptionHandler();

        app.UseHttpsRedirection();

        app.UseCors();
        
        app.UseAuthentication();
        app.UseAuthorization();
        
        #region MODULES CONNECTION
        app.MapIdentityModule();
        app.MapToursModule();
        #endregion
        
        app.ApplyAllModulesMigrations();
        
        app.Run();
    }
}