using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Toury.Tours.Domain;

namespace Smart_Toury.Tours.Infrastructure.Configurations;

internal class ToursConfiguration : IEntityTypeConfiguration<Tour>
{
    public void Configure(EntityTypeBuilder<Tour> builder)
    {
        builder.HasKey(t => t.Id);
        builder.Property(t => t.GuideId)
            .IsRequired();
        builder.Property(t => t.Name)
            .IsRequired()
            .HasMaxLength(200);
        builder.Property(t => t.Description)
            .IsRequired();
    }
}