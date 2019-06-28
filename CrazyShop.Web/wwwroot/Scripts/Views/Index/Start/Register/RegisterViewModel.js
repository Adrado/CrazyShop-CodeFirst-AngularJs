class RegisterViewModel
{
    constructor($window)
    {
        this.Window = $window;
    }
    ChangeToLogin()
    {
        this.Window.AccountUser = true;
    }
}

app.component('register',
    {
        templateUrl: './Scripts/Views/Index/Start/Register/RegisterView.html',
        controller: RegisterViewModel,
        controllerAs: "vm"
    });

