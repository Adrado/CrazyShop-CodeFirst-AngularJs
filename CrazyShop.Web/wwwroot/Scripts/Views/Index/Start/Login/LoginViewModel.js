class LoginViewModel
{
    constructor($LoginService, $window)
    {
        this.LoginService = $LoginService;
        this.Window = $window;
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
        this.Window.IsLoading = true;
        let loginRequest = new LoginRequest(this.Email, this.Password);
        this.LoginService.Login(loginRequest)
            .then((response) =>
            {
                this.Window.Token = response.data.token;
                this.Window.LogonUser = true;
                this.Window.IsLoading = false;
            },
            (error) =>
            {
                console.log(error);
                this.Window.Token = null;
                this.Window.IsLoading = false;
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

