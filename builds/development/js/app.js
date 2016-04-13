(function(){
    "use strict";
    
    var myApp = angular.module("myApp", ["ngRoute"]);

    myApp.controller('appCtrl', function ($scope) {
        $scope.message = 'Welcome to myApp';
    });

})();

