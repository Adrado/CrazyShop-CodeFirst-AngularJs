using CrazyShop.Lib.DAL;
using CrazyShop.Lib.Models;
using CrazyShop.Lib.Services;
using CrazyShop.Lib.Services.Dtos;
using CrazyShop.Lib.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrazyShop.Web.Services
{
    public class RegisterService : IRegisterService
    {
        public ILoginService LoginService { get; set; }
        public CrazyShopDbContext DbContext { get; set; }
        public RegisterService(CrazyShopDbContext dbContext, ILoginService loginService)
        {
            DbContext = dbContext;
            LoginService = loginService;
        }

        public virtual RegisterResponse Register(RegisterRequest registerRequest)
        {
            var output = new RegisterResponse();
            if (string.IsNullOrEmpty(registerRequest.Email))
            {
                output.Status = RegisterResponseStatus.MissingEmail;
            }
            else if (!registerRequest.Email.Contains("@"))
            {
                output.Status = RegisterResponseStatus.WrongEmail;
            }
            else if (string.IsNullOrEmpty(registerRequest.Password))
            {
                output.Status = RegisterResponseStatus.MissingPassword;
            }
            else if (registerRequest.Password.Length < 8)
            {
                output.Status = RegisterResponseStatus.PasswordInsecure;
            }

            var client = DbContext.Clients.FirstOrDefault(x => x.Email == registerRequest.Email);
            if (client != null)
            {
                output.Status = RegisterResponseStatus.UserWithEmailAlreadyExists;
            }
            else
            {
                client = new Client
                {
                    Email = registerRequest.Email,
                    Password = registerRequest.Password
                };

                DbContext.Clients.Add(client);
                DbContext.SaveChanges();

                output.Status = RegisterResponseStatus.Ok;

                var loginRequest = new LoginRequest()
                {
                    Email = registerRequest.Email,
                    Password = registerRequest.Password
                };

                output.Client = LoginService.Authenticate(loginRequest) as Client;
            }

            return output;
        }
    }
}
