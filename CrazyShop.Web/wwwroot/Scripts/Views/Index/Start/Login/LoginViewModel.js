class LoginViewModel
{
    constructor($LoginService)
    {
        this.LoginService = $LoginService;
        this.IsEditing = false;
    }


    CheckFormLogin(complete)
    {
        if (complete)
        {
            this.login()
        }
    }

    login()
    {
        let loginRequest = new LoginRequest(this.email, this.password)
        this.LoginService.Post(loginRequest)
            .then((response) =>
            {
                this.Window.Token = response.data.token;
            },
            (error) =>
            {
                console.log(error);
                this.Window.Token = null;
            });
    }
}

app.component('login',
    {
        templateUrl: './Scripts/Views/Index/Start/Login/LoginView.html',
        controller: LoginViewModel,
        controllerAs: "vm"
    });

