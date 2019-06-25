class StartViewModel
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

app.component('start',
    {
        templateUrl: './Scripts/Views/Index/Start/StartView.html',
        controller: StartViewModel,
        controllerAs: "vm"
    });

