var app = angular.module('CrazyBooksApp', ['ngRoute', 'ui.grid']);

app.config(function ($routeProvider, $locationProvider)
{
    $routeProvider.when('/employees',
        {
            template: '<employees></employees>'
        });

    $routeProvider.when('/clients',
        {
            template: '<clients></clients>'
        });

    $routeProvider.when('/products',
        {
            template: '<products></products>'
        });

    $routeProvider.when('/purchases',
        {
            template: '<purchases></purchases>'
        });
    $routeProvider.when('/register',
        {
            template: '<register></register>'
        });
    $routeProvider.when('/login',
        {
            template: '<login></login>'
        });
    $routeProvider.when('/home',
        {
            template: '<home></home>'
        });
    $routeProvider.when('/start',
        {
            template: '<start></start>'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});




