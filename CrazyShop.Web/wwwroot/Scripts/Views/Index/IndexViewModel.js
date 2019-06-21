class IndexViewModel
{
    constructor()
    {
    }
}

app.component('index',
{
    templateUrl: './Scripts/Views/Index/IndexView.html',
    controller: IndexViewModel,
    controllerAs: "vm"
});

