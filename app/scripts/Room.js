(function() {
  function RoomService($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(roomNumber) {
      
      rooms.$add('room' + (roomNumber + 1)).then(function(room) {
        var id = room.key;
        console.log('added record with id' + id);
        rooms.$indexFor(id);
      });
    }

    return Room;
  }

  angular
    .module('bloc-chat')
    .factory('RoomService', ['$firebaseArray', RoomService]);
})();
