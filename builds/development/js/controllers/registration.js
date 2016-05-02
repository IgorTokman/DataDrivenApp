(function(){
    "use strict";

    //Performs the basic actions for registration system
     angular.module('myApp')
         .controller('RegistrationCtrl', ['$scope', 'Authentication',
             function ($scope, Authentication) {

             $scope.login = function () {
                 Authentication.login($scope.user);
             };   //login

             $scope.logout = function () {
                 Authentication.logout();
             };   //logout

             $scope.register = function () {
                 Authentication.register($scope.user);
             };  //register
             
         }]);   //Controller

})();

