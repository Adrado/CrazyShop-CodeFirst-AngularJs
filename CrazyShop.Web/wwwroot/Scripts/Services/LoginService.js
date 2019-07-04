class LoginService extends GenericService
{
    constructor($http, $window)
    {
        super($http, "api/login", $window);
    }

    Login(model)
    {
        return this.Post(model);
    }
}

app.service("$LoginService", LoginService);