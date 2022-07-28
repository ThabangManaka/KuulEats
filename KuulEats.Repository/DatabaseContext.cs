using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Models;
using Microsoft.EntityFrameworkCore;

namespace KuulEats.Repository
{
    public class DatabaseContext : DbContext
    {

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }
        public DbSet<Users> Users { get; set; }
        public DbSet<Restuarant> Restuarants { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
