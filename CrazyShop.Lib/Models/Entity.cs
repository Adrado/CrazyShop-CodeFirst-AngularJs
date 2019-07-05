using System;
using System.Collections.Generic;
using System.Text;

namespace CrazyShop.Lib.Models
{
    public class Entity
    {
        public Guid Id { get; set; }
        public string EntityType
        {
            get
            {
                return GetType().Name;
            }
        }
    }

    
}
