(function() {
  function ActiveRoomCtrl(RoomService, Message, $scope, $cookies) {

    $scope.setActiveRoom= function setActiveRoom(room){
      $scope.currentlyActive.name = room.$value;
      $scope.currentlyActive.messages = Message.getByRoomId(room);
      $scope.currentlyActive.roomId = room.$id;
    }

    $scope.currentlyActive={
      name: 'No room selected',
      messages: []
    };



    $scope.sendMessage= Message.send;
    $scope.messageContent;


  }



  angular
    .module('bloc-chat')
    .controller('ActiveRoomCtrl', ['RoomService', 'Message', '$scope', '$cookies', ActiveRoomCtrl]);
})();
