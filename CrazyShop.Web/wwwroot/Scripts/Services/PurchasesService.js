class PurchasesService extends GenericService
{
    constructor($http)
    {
        super($http, "api/purchases/");
    }
}

app.service("$PurchasesService", ProductsService);