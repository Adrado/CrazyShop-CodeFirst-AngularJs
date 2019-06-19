class Purchase extends Entity
{
    constructor(json)
    {
        super(json);
        if (json)
        {
            this.Quantity = json.quantity;
            this.ClientId = json.clientId;
            this.ProductId = json.productId;
        }
        else
        {
            this.Quantity = 0;
            this.ClientId = "00000000-0000-0000-0000-000000000000";
            this.ProductId = "00000000-0000-0000-0000-000000000000";
        }
    }
}