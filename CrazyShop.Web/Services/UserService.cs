using CrazyShop.Lib.Models;
using CrazyShop.Web.Helpers;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CrazyShop.Lib.DAL;

namespace CrazyShop.Web.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
        User GetById(Guid id);
    }

    public class UserService : IUserService
    {
        // users hardcoded for simplicity, store in a db with hashed passwords in production applications
        //private static List<User> _users = new List<User>
        //{
        //    new Client { Id = Guid.NewGuid(), Name = "Lolo", Email="u@u", Surname = "pocholo",  Password = "1234" },
        //    new Employee { Id = Guid.NewGuid(), Name = "Admin", Email="a@a", Surname = "fds", Password = "1234" }
        //};

        private readonly AppSettings _appSettings;
        private readonly CrazyShopDbContext _context;

        public UserService(IOptions<AppSettings> appSettings, CrazyShopDbContext context)
        {
            _appSettings = appSettings.Value;
            _context = context;
        }


        public User Authenticate(string email, string password)
        {
            var user = _context.Users.SingleOrDefault(x => x.Email == email || x.Password == password);

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, user.GetType().Name)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            return user;
        }

        public IEnumerable<User> GetAll()
        {
            // return users without passwords
            return _context.Users;
        }

        public User GetById(Guid id)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == id);
            return user;
        }
    }
}
