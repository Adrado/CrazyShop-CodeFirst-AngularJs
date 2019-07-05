using CrazyShop.Lib.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrazyShop.Lib.Services.Dtos
{
    public class PurchaseResponse
    {
        public PurchaseResponseStatus Status { get; set; }
        public Purchase Purchase { get; set; }
    }

    public enum PurchaseResponseStatus
    {
        ok,
        ClientHasLimitofProducts,
        ThereAreNoAvailableProducts
    }
}
