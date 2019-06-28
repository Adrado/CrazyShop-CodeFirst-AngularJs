class StartViewModel
{
    constructor($location, $window)
    {
        this.Location = $location;
        this.Window = $window;
        this.Window.AccountUser = true;
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }

    get HaveAccount()
    {
        if (this.Window.AccountUser)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

app.component('start',
    {
        templateUrl: './Scripts/Views/Index/Start/StartView.html',
        controller: StartViewModel,
        controllerAs: "vm"
    });

