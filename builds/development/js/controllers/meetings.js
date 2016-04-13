(function(){
    "use strict";

    angular.module("myApp")
        .controller('MeetingsCtrl', ['$scope', '$rootScope',
            '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL',
            function ($scope, $rootScope, $firebaseAuth,
                      $firebaseArray, FIREBASE_URL) {

                $scope.message = "Type a meeting name and hit +";

                var ref = new Firebase(FIREBASE_URL);
                var auth = $firebaseAuth(ref);

                auth.$onAuth(function (authUser) {
                   if(authUser){
                      var meetingsRef = new Firebase(FIREBASE_URL +
                           'users/' + $rootScope.currentUser.$id
                      + '/meetings');

                       var meetingsInfo = $firebaseArray(meetingsRef);
                       $scope.meetings = meetingsInfo;

                       $scope.deleteMeeting = function (key) {
                           meetingsInfo.$remove(key);
                       }

                       $scope.addMeeting = function () {
                           meetingsInfo.$add({
                                name:   $scope.meetingname,
                                data:   Firebase.ServerValue.TIMESTAMP
                           })
                               .then(function () {
                                   $scope.meetingname = '';
                           });  //promise
                       }    //addMeeting
                   }    //user auth
                });   //onAuth
        }]);      //Ctrl

})();

