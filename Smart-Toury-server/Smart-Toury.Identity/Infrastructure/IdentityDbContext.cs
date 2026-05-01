using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain;
using Smart_Toury.Identity.Domain.Users;

namespace Smart_Toury.Identity.Infrastructure;

internal class IdentityDbContext(DbContextOptions<IdentityDbContext> options) 
    : DbContext(options)
{
    public DbSet<User> Users => Set<User>();
    public DbSet<RefreshToken>  RefreshTokens => Set<RefreshToken>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.HasDefaultSchema("identity");
        mb.Entity<User>(e =>
        {
            e.HasKey(u => u.Id);
            e.HasIndex(u => u.Email).IsUnique();
            e.Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(256);
            e.Property(u => u.PasswordHash)
                .IsRequired();
        });

        mb.Entity<RefreshToken>(e =>
        {
            e.HasKey(r => r.Id);
            e.Property(r => r.Token).IsRequired();
            e.Property(r => r.ExpiresAt).IsRequired();
            e.HasOne<User>()
                .WithMany()
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }
}
