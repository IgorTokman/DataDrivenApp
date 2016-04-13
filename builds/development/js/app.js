(function(){
    "use strict";

    var myApp = angular.module('myApp', ['ngRoute', 'firebase'])
        .constant('FIREBASE_URL', 'https://angulardatadative.firebaseio.com/');

    myApp.run(['$rootScope', '$location',
    function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
            if(error = 'AUTH_REQUIRED'){
                $rootScope.message = 'Sorry, you must log in to access that page';
                $location.path('/login');
            }   //AUTH REQUIRED
        });  //event info
    }]);  //run

    myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl:    'views/login.html',
                controller:     'RegistrationCtrl'
            })
            .when('/register', {
                templateUrl:    'views/register.html',
                controller:     'RegistrationCtrl'
            })
            .when('/checkins/:uId/:mId', {
                templateUrl:    'views/checkins.html',
                controller:     'CheckinsCtrl'
            })
            .when('/checkins/:uId/:mId/checkinslist', {
                templateUrl:    'views/checkinslist.html',
                controller:     'CheckinsCtrl'
            })
            .when('/meetings', {
                templateUrl:    'views/meetings.html',
                controller:     'MeetingsCtrl',
                resolve:        {
                    currentAuth:    function (Authentication) {
                        return Authentication.requireAuth();
                    }   //current Auth
                }   //resolve
            })
            .otherwise({
                redirectTo:     '/login'
            });
    }]);

})();

