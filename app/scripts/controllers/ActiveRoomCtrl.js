(function() {
  function ActiveRoomCtrl(RoomService, Message, $scope) {
    $scope.setActiveRoom= function setActiveRoom(room){
      $scope.currentlyActive.name = room.$value;
      $scope.currentlyActive.messages = Message.getByRoomId(room);
    }

    $scope.currentlyActive={
      name: 'No room selected',
      messages: []
    };


  }



  angular
    .module('bloc-chat')
    .controller('ActiveRoomCtrl', ['RoomService', 'Message', '$scope', ActiveRoomCtrl]);
})();
