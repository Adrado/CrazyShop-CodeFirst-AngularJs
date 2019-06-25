class LoginViewModel
{
    constructor($LoginService)
    {
        this.LoginService = $LoginService;
        this.IsEditing = false;
    }

    login()
    {
        let loginRequest = new LoginRequest(this.email, this.password)
        this.LoginService.PostAsync(LoginRequest)
            .then((response) =>
            {
                this.Window.Token = response.data.token;
            },
                (error) =>
                {
                    alert(error.data.message);
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

