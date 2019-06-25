using CrazyShop.Web.Security;
using CrazyShop.Web.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrazyShop.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        IUserService UsersService { get; set; }

        public LoginController(IUserService usersService)
        {
            UsersService = usersService;
        }

        // POST: api/Login
        [HttpPost]
        public IActionResult Post([FromBody] LoginRequest request)
        {
            var user = UsersService.Authenticate(request.Email, request.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }
    }
}