using Microsoft.EntityFrameworkCore;
using Smart_Toury.Identity.Domain.Users;

namespace Smart_Toury.Identity.Infrastructure.Database;

internal class IdentityDbContext(DbContextOptions<IdentityDbContext> options) 
    : DbContext(options)
{
    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.HasDefaultSchema("identity");
        mb.Entity<User>(e =>
        {
            e.HasKey(u => u.Id);
            e.HasIndex(u => u.Email).IsUnique();
        });
    }
}
