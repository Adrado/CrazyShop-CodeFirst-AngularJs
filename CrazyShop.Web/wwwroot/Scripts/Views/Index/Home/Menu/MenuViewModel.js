class MenuViewModel
{
    constructor($location, $window)
    {
        this.Location = $location;
        this.Window = $window;
        this.Window.Token = null;        
    }

    ParseJwt(token)
    {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c)
        {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }

    get IsEmployee()
    {
        if (this.Window.Token != null)
        {
            let x = this.ParseJwt(this.Window.Token);
            console.log(x); 

            if (x.role == "Employee")
            {
                return true;
            }
        }
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


