(function(){
    "use strict";

     angular.module("myApp")
         .controller('RegistrationCtrl', ['$scope', function ($scope) {
             
             $scope.login = function () {
                 $scope.message = "Welcome " +
                         $scope.user.email;
             }
             $scope.register = function () {
                 $scope.message = "Welcome " +
                         $scope.user.email;
             }
             
         }]);

})();

