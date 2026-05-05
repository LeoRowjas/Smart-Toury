using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Toury.Identity.Domain.Users;

namespace Smart_Toury.Identity.Infrastructure.Configurations;

internal class TouristProfileConfiguration : IEntityTypeConfiguration<TouristProfile>
{
    public void Configure(EntityTypeBuilder<TouristProfile> builder)
    {
        builder.HasKey(g => g.Id);
        
        builder.HasOne<User>()
            .WithOne()
            .HasForeignKey<TouristProfile>(g => g.UserId);
        
        builder.OwnsOne(p => p.Preferences);
        builder.OwnsOne(p => p.Stats);
    }
}