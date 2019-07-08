class IndexViewModel
{
    constructor($location, $window, $JwtLoginService)
    {
        this.Location = $location;
        this.Window = $window;
        this.JwtLoginService = $JwtLoginService;
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }

    IsLogon()
    {
        let x = this.JwtLoginService.ParseJwt();
        if (x == undefined)
            return false;
        if (x.role == "Employee" || x.role == "Client")
            return true;
        else
            return false;
    }

    IsStartVisible()
    {
        let c1 = !this.IsLogon();
        let c2 = !this.Window.IsLoading;
        return c1 && c2;
    }

    IsLoading()
    {
        return this.Window.IsLoading;
    }
}

app.component('index',
{
    templateUrl: './Scripts/Views/Index/IndexView.html',
    controller: IndexViewModel,
    controllerAs: "vm"
});

