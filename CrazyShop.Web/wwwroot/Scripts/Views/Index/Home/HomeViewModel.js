class HomeViewModel
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

app.component('home',
    {
        templateUrl: './Scripts/Views/Index/Home/HomeView.html',
        controller: HomeViewModel,
        controllerAs: "vm"
    });