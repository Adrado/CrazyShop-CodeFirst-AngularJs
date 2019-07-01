class LoginViewModel
{
    constructor($LoginService, $window)
    {
        this.LoginService = $LoginService;
        this.Window = $window;
        this.IsEditing = false;
        this
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
        let loginRequest = new LoginRequest(this.Email, this.Password);
        this.LoginService.Post(loginRequest)
            .then((response) =>
            {
                this.Window.Token = response.data.token;
                alert(this.Window.Token);
                this.Window.LogonUser = true;
            },
            (error) =>
            {
                console.log(error);
                this.Window.Token = null;
            });
    }

    ChangeToRegister()
    {
        this.Window.AccountUser = false;
    }
}

app.component('login',
    {
        templateUrl: './Scripts/Views/Index/Start/Login/LoginView.html',
        controller: LoginViewModel,
        controllerAs: "vm"
    });

