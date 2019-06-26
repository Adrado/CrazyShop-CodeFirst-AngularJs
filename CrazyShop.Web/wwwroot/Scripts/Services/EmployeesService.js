class EmployeesService extends CRUDService
{
    constructor($http, $window)
    {
        super($http, "api/employees/", $window);
    }
}

app.service("$EmployeesService", EmployeesService);