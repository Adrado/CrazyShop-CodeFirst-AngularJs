using CrazyShop.Web.Security;
using CrazyShop.Web.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using CrazyShop.Lib.DAL;
using CrazyShop.Lib.Models;
using CrazyShop.Lib.Services;
using CrazyShop.Lib.Services.Dtos;

namespace CrazyShop.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        ILoginService _loginService { get; set; }

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        // POST: api/Login
        [HttpPost]
        public async Task<User> Post([FromBody] LoginRequest loginRequest)
        {
            return await Task.Run(() =>
            {
                return _loginService.Authenticate(loginRequest);
            });
        }
    }
}