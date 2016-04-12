(function () {

    angular
        .module('app')
        .controller('MeetingCtrl', function ($scope, $firebaseArray, $firebase) {

            var ref = new Firebase("https://angulardatadative.firebaseio.com/meetings");
            var meetings = $firebaseArray(ref);

            $scope.meetings = meetings;
            
            $scope.addMeeting = function () {
                meetings.$add({
                    name: $scope.meetingName,
                    date: Firebase.ServerValue.TIMESTAMP
                }).then(function () {
                    $scope.meetingName = '';
                });
            }
            
            $scope.deleteMeeting = function (key) {
                meetings.$remove(key);
            }
        });

})();