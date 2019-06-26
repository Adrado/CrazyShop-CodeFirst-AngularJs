class ClientsService extends CRUDService
{
    constructor($http, $window)
    {
        super($http, "api/clients/", $window);
    }
}

app.service("$ClientsService", ClientsService);