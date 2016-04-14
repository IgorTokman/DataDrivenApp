(function(){
    "use strict";

    angular.module("myApp")
        .controller('CheckinsCtrl', ['$scope', '$rootScope', '$location',
            '$firebaseObject','$routeParams', '$firebaseArray', 'FIREBASE_URL',
            function ($scope, $rootScope, $location, $firebaseObject, $routeParams,
                      $firebaseArray, FIREBASE_URL) {

                      $scope. whichmeeting = $routeParams.mId;
                      $scope. whichuser = $routeParams.uId;

                var ref = new Firebase(FIREBASE_URL + 'users/' +
                $scope.whichuser + '/meetings/' + $scope.whichmeeting
                + '/checkins');

                var checkinsList = $firebaseArray(ref);
                $scope.checkins = checkinsList;

                $scope.order = "firstname";
                $scope.direction = null;
                $scope.query = '';

                $scope.recordId = '';

                $scope.addCheckin = function () {
                    var checkinsInfo = $firebaseArray(ref);

                    var myData= {
                        firstname:  $scope.user.firstname,
                        lastname:   $scope.user.lastname,
                        email:      $scope.user.email,
                        date:       Firebase.ServerValue.TIMESTAMP
                    };     //myData

                    checkinsInfo.$add(myData).then(function () {
                       $location.path('/checkins/' + $scope.whichuser
                       + '/' + $scope.whichmeeting + '/checkinslist');
                    });
                };      //addCheckin

                $scope.deleteCheckin = function (id) {
                    var ref = new Firebase(FIREBASE_URL + 'users/' +
                    $scope.whichuser + '/meetings/' +
                    $scope.whichmeeting + '/checkins/' + id);

                    var records = $firebaseObject(ref);
                    records.$remove(id);
                }

                $scope.pickRandom = function () {
                    var whichRecord = Math.round(Math.random()*(checkinsList.length-1));
                    $scope.recordId = checkinsList.$keyAt(whichRecord);
                }   //pick winner

                $scope.showLove = function (myCheckin) {
                    myCheckin.show = !myCheckin.show;

                    if(myCheckin.userState == 'expanded'){
                        myCheckin.userState = '';
                    }else{
                        myCheckin.userState = 'expanded';
                    }
                };
                
                $scope.giveLove = function (myCheckin, myGift) {
                    var refLove = new Firebase(FIREBASE_URL + 'users/' +
                        $scope.whichuser + '/meetings/' +
                        $scope.whichmeeting + '/checkins/' + myCheckin.$id
                    + '/awards');

                    var checkinsArray = $firebaseArray(refLove);
                    var myData = {
                        name: myGift,
                        date: Firebase.ServerValue.TIMESTAMP
                    };  //myData

                    checkinsArray.$add(myData);

                };      //myLove
                
                $scope.deleteLove = function (checkin, award) {
                    var ref = new Firebase(FIREBASE_URL + 'users/' +
                        $scope.whichuser + '/meetings/' +
                        $scope.whichmeeting + '/checkins/' + checkin.$id
                        + '/awards/' + award);

                    var records = $firebaseObject(ref);
                    records.$remove();
                }

            }]);   //Controller

})();

