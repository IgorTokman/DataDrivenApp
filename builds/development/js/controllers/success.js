(function(){
    "use strict";

    angular.module("myApp")
        .controller('SuccessCtrl', ['$scope', function ($scope) {
            $scope.message = "Welcome to myApp";
        }]);

})();

