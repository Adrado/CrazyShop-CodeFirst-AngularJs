class LoadingViewModel
{
    constructor()
    {

    }
}
app.component('loading',
    {
        templateUrl: './Scripts/Views/Index/Controls/Loading/LoadingView.html',
        controller: LoadingViewModel,
        controllerAs: "vm"
    });