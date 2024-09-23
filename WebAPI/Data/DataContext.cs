using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
namespace WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}

        // wil reference db table
        public DbSet<City> Cities { get; set; }
    }
}