using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrazyShop.Lib.Models
{
    public class User : Entity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string Token { get; set; }
    }
}
