using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrazyShop.Lib.Models
{
    public class Client : User
    {
        public string Address { get; set; }
        [JsonIgnore]
        public ICollection<Purchase> Purchases { get; set; }
    }
}
