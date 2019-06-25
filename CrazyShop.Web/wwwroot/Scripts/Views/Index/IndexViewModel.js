class IndexViewModel
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

app.component('index',
{
    templateUrl: './Scripts/Views/Index/IndexView.html',
    controller: IndexViewModel,
    controllerAs: "vm"
});

