class Product extends Entity
{
    constructor(json)
    {
        super(json);
        if (json)
        {
            this.Name = json.name;
            this.Price = json.price;
        }
        else
        {
            this.Name = "";
            this.Price = 0;
        }
    }
}

