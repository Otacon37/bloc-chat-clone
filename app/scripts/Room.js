(function() {
  function RoomService($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
    Room.all = rooms;

    return Room;
  }

  angular
    .module('bloc-chat')
    .factory('RoomService', ['$firebaseArray', RoomService]);
})();
