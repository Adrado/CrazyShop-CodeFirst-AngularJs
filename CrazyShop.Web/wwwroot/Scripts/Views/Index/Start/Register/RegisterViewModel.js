class RegisterViewModel
{
    constructor()
    {
        alert("Register View");
    }
}

app.component('register',
    {
        templateUrl: './Scripts/Views/Index/Start/Register/RegisterView.html',
        controller: RegisterViewModel,
        controllerAs: "vm"
    });

