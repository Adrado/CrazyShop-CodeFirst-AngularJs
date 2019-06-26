class ProductsService extends CRUDService
{
    constructor($http, $window)
    {
        super($http, "api/products/", $window);
    }
}

app.service("$ProductsService", ProductsService);