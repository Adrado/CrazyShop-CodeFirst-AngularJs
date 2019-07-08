class MenuViewModel
{
    constructor($location, $JwtLoginService)
    {
        this.Location = $location;
        this.JwtLoginService = $JwtLoginService;
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }

    get IsEmployee()
    {
        let x = this.JwtLoginService.ParseJwt();
        if (x.role === "Employee")
            return true;
        else
        return false;
    }
}

app.component('menu',
{
    templateUrl: './Scripts/Views/Index/Home/Menu/MenuView.html',
    controller: MenuViewModel,
    controllerAs: "vm",
    function($scope)
    {
        $scope.ShowView('users')
    }
});


