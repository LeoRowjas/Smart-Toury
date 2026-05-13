using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Toury.Tours.Domain;

namespace Smart_Toury.Tours.Infrastructure.Configurations;

internal class LocationConfiguration : IEntityTypeConfiguration<Location>
{
    public void Configure(EntityTypeBuilder<Location> builder)
    {
        builder.HasKey(l => l.Id);
        builder.Property(l => l.Name)
            .IsRequired();
        builder.Property(l => l.Latitude)
            .IsRequired();
        builder.Property(l => l.Longitude)
            .IsRequired();
    }
}