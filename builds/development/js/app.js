(function() {
    var app = angular.module('app', ['ngRoute', 'firebase']);


    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'RegistrationCtrl'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegistrationCtrl'
            })
            .when('/meetings', {
                templateUrl: 'views/meetings.html',
                controller: 'MeetingCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }
    ]);
    
})();