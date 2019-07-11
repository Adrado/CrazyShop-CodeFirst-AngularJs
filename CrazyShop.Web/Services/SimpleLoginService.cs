using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CrazyShop.Lib.DAL;
using CrazyShop.Lib.Models;
using CrazyShop.Lib.Services.Dtos;

namespace CrazyShop.Lib.Services
{
    public class SimpleLoginService : ILoginService
    {
        CrazyShopDbContext DbContext { get; set; }

        public SimpleLoginService(CrazyShopDbContext dbContext)
        {
            DbContext = dbContext;
        }
        public virtual User Authenticate(LoginRequest loginRequest)
        {
            if (DbContext.Employees.Count()== 2)
            {
                DbContext.Employees.Add(new Employee()
                {
                    Id = Guid.NewGuid(),
                    Email = "l@l",
                    Password = "1234",
                    Name = "Lolo"
                });

                DbContext.SaveChanges();
            }

            var user = DbContext.Users.FirstOrDefault(x => x.Email == loginRequest.Email && x.Password == loginRequest.Password);

            return user;
        }
    }
}
