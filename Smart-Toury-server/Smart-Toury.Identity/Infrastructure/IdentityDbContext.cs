using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain;
using Smart_Toury.Identity.Domain.Users;

namespace Smart_Toury.Identity.Infrastructure;

internal class IdentityDbContext(DbContextOptions<IdentityDbContext> options) 
    : DbContext(options)
{
    public DbSet<User> Users => Set<User>();
    public DbSet<RefreshToken>  RefreshTokens => Set<RefreshToken>();
    public DbSet<TouristProfile> TouristProfiles => Set<TouristProfile>();
    public DbSet<GuideProfile> GuideProfiles => Set<GuideProfile>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.HasDefaultSchema("identity");
        mb.ApplyConfigurationsFromAssembly(typeof(IdentityDbContext).Assembly);
        
    }
}
