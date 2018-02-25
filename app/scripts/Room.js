(function() {
  function RoomService($firebaseArray, $scope) {
    var Room = {};

    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);


    Room.all = rooms;
    Room.add = function(roomNumber) {
      rooms.$add(roomNumber).then(function(room) {
        var id = room.key;
        rooms.$indexFor(id);
      })
    }

    return Room;
  }

  angular
    .module('bloc-chat')
    .factory('RoomService', ['$firebaseArray', RoomService]);
})();
