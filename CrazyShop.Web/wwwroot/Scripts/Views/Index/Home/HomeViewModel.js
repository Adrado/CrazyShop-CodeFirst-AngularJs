class HomeViewModel
{
    constructor()
    {
    }
}

app.component('home',
    {
        templateUrl: './Scripts/Views/Index/Home/HomeView.html',
        controller: HomeViewModel,
        controllerAs: "vm"
    });