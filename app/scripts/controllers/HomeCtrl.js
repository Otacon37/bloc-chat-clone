(function() {
  function HomeCtrl(RoomService) {
      this.rooms = RoomService.all;
  }

  angular
    .module('bloc-chat')
    .controller('HomeCtrl', ['RoomService', HomeCtrl]);
})();
