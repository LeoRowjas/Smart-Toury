using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Toury.Tours.Domain;

namespace Smart_Toury.Tours.Infrastructure.Configurations;

internal class TourStopConfiguration : IEntityTypeConfiguration<TourStop>
{
    public void Configure(EntityTypeBuilder<TourStop> builder)
    {
        builder.HasKey(t => t.Id);
        builder.Property(t => t.LocationId)
            .IsRequired();
        builder.Property(t => t.TourId)
            .IsRequired();
        builder.Property(t => t.DurationMinutes)
            .IsRequired();
        builder.Property(t => t.Order)
            .IsRequired();
        builder.Property(t => t.OffsetMinutes)
            .IsRequired();
    }
}