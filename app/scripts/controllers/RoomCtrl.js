(function () {
  function RoomCtrl(Room) {
    this.rooms = Room.all;

  }

  angular
    .module('bloc-chat')
    .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
