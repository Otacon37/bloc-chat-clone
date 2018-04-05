(function() {
  function ActiveRoomCtrl(RoomService, Message, $scope) {
    $scope.setActiveRoom= function setActiveRoom(room){
      $scope.currentlyActive=room;
    }

    $scope.currentlyActive={};


  }

  angular
    .module('bloc-chat')
    .controller('ActiveRoomCtrl', ['RoomService', 'Message', '$scope', ActiveRoomCtrl]);
})();
