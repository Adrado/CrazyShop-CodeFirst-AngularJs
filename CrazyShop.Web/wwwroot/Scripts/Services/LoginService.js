class LoginService extends GenericService
{
    constructor($http)
    {
        super($http, "api/login/");
    }
}

app.service("$LoginService", LoginService);