class ClientsService extends CRUDService
{
    constructor($http)
    {
        super($http, "api/clients/");
    }
}

app.service("$ClientsService", ClientsService);