(function () {

    angular
        .module('app')
        .controller('MeetingCtrl', function ($scope, $firebaseArray) {

            var ref = new Firebase("https://angulardatadative.firebaseio.com/meetings");
            var meetings = $firebaseArray(ref);

            $scope.meetings = meetings;
        });

})();