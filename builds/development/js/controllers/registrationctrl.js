(function () {

    angular
        .module('app')
        .controller('RegistrationCtrl', function ($scope, $location) {
            
            $scope.login = function () {
                $location.path('/meetings');
            }

            $scope.register = function () {
                $location.path('/meetings');
            }
        });

})();