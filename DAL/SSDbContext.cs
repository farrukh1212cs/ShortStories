using BOL;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DAL
{

    //Step 1: Add BOL Ref
    //Step 2: Install EF Core Packages:
    //Microsoft.EntityFrameworkCore.SqlServer
    //Microsoft.EntityFrameworkCore.Tools
    //Microsoft.AspNetCore.Identity.EntityFrameworkCore
    public class SSDbContext : IdentityDbContext
    {
        public SSDbContext(DbContextOptions<SSDbContext> options) : base(options)
        {
            Database.Migrate();
        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    base.OnConfiguring(optionsBuilder);
        //    optionsBuilder.UseSqlServer(@"Server=.;Database=SSDb_8;Trusted_Connection=True;");
        //}
        public DbSet<Story>? Stories { get; set; }
        public DbSet<Category>? Categories { get; set; }
    }
}