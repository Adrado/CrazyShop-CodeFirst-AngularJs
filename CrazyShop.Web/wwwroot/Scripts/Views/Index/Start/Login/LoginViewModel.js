class LoginViewModel
{
    constructor($location)
    {
        this.Location = $location;
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }
}

app.component('login',
    {
        templateUrl: './Scripts/Views/Index/Start/Login/LoginView.html',
        controller: LoginViewModel,
        controllerAs: "vm"
    });

