(function() {
  function RoomService($firebaseArray, $scope) {
    var Room = {};
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
    var roomNameGetter = angular.module('bloc-chat', []).controller('HomeCtrl', function($scope) {
       return $scope.newRoomName = "nameOfRoom";
  });


    Room.all = rooms;

    Room.add = function(roomNumber) {

      rooms.$add(roomNameGetter).then(function(room) {
        console.log(roomNameGetter.newRoomName);
        var id = room.key;
        rooms.$indexFor(id);
      });
    }

    return Room;
  }

  angular
    .module('bloc-chat')
    .factory('RoomService', ['$firebaseArray', RoomService]);
})();
