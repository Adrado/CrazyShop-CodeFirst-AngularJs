using System;
using System.Collections.Generic;
using System.Text;

namespace CrazyShop.Lib.Services.Dtos
{
    public class RegisterRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
