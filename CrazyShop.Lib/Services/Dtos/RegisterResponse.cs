using CrazyShop.Lib.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrazyShop.Lib.Services.Dtos
{
    public class RegisterResponse
    {
        public RegisterResponseStatus Status { get; set; }
        public Client Client { get; set; }
    }

    public enum RegisterResponseStatus
    {
        Ok,
        UserWithEmailAlreadyExists,
        WrongEmail,
        MissingEmail,
        MissingPassword,
        PasswordInsecure
    }
}
