using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Toury.Identity.Domain.Users;

namespace Smart_Toury.Identity.Infrastructure.Configurations;

internal class GuideProfileConfiguration : IEntityTypeConfiguration<GuideProfile>
{
    public void Configure(EntityTypeBuilder<GuideProfile> builder)
    {
        builder.HasKey(g => g.Id);
        
        builder.HasOne<User>()
            .WithOne()
            .HasForeignKey<GuideProfile>(g => g.UserId);
    }
}

