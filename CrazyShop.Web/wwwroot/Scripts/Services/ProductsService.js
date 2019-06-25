class ProductsService extends CRUDService
{
    constructor($http)
    {
        super($http, "api/products/");
    }
}

app.service("$ProductsService", ProductsService);