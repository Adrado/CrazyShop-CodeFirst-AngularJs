class PurchasesService extends CRUDService
{
    constructor($http)
    {
        super($http, "api/purchases/");
    }
}

app.service("$PurchasesService", PurchasesService);