class IndexViewModel
{
    constructor($location, $window)
    {
        this.Location = $location;
        this.Window = $window;
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }

    get IsLogon()
    {
        if (this.Window.LogonUser)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

app.component('index',
{
    templateUrl: './Scripts/Views/Index/IndexView.html',
    controller: IndexViewModel,
    controllerAs: "vm"
});

