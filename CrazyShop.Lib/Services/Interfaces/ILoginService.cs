using CrazyShop.Lib.Models;
using CrazyShop.Lib.Services.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrazyShop.Lib.Services
{
    public interface ILoginService
    {
        User Authenticate(LoginRequest loginRequest);
    }
}
