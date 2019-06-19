using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrazyShop.Lib.Models
{
    public class Purchase : Entity
    {
        public int Quantity { get; set; }
        public Guid ClientId { get; set; }
        public Guid ProductId { get; set; }

        [JsonIgnore]
        public Client Client { get; set; }
        [JsonIgnore]
        public Product Product { get; set; }
    }
}
