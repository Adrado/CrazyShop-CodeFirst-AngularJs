class PurchasesService extends CRUDService
{
    constructor($http, $window)
    {
        super($http, "api/purchases/", $window);
    }
}

app.service("$PurchasesService", PurchasesService);