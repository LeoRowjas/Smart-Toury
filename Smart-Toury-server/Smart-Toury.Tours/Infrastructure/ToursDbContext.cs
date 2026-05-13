using Microsoft.EntityFrameworkCore;
using Smart_Toury.Tours.Domain;

namespace Smart_Toury.Tours.Infrastructure;

internal class ToursDbContext(DbContextOptions<ToursDbContext> options)
    : DbContext(options)
{
    
    public DbSet<Tour> Tours => Set<Tour>();
    public DbSet<Location> Locations => Set<Location>();
    public DbSet<TourStop> TourStops => Set<TourStop>();
    
    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.HasDefaultSchema("tours");
        mb.ApplyConfigurationsFromAssembly(typeof(ToursDbContext).Assembly);
    }
}