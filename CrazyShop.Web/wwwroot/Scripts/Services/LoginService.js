class LoginService extends GenericService
{
    constructor($http, $window)
    {
        super($http, "api/login", $window);
    }
}

app.service("$LoginService", LoginService);