(function() {
    var app = angular.module('app', ['ngRoute']);


    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html'
            })
            .when('/register', {
                templateUrl: 'views/register.html'
            })
            .when('/meetings', {
                templateUrl: 'views/meetings.html'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }
    ]);

})();