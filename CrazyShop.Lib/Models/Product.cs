using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrazyShop.Lib.Models
{
    public class Product : Entity
    {
        public string Name { get; set; }
        public int Price { get; set; }
        [JsonIgnore]
        public ICollection<Purchase> Purchases { get; set; }
    }
}
