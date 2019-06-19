using CrazyShop.Lib.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace CrazyShop.Lib.DAL
{
    public class CrazyShopDbContext : DbContext
    {
        public CrazyShopDbContext(DbContextOptions<CrazyShopDbContext> options) : base(options)
        {
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
    }
}
