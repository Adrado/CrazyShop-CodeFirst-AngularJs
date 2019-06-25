class EmployeesService extends CRUDService
{
    constructor($http)
    {
        super($http, "api/employees/");
    }
}

app.service("$EmployeesService", EmployeesService);