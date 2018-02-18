(function() {
  function HomeCtrl(RoomService) {
      this.rooms = RoomService.all;
      this.add = RoomService.add;
  }

  angular
    .module('bloc-chat')
    .controller('HomeCtrl', ['RoomService', HomeCtrl]);
})();
