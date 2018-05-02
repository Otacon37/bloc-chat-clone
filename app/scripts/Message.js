(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(room) {
      var currentRoomMessages = ref.orderByChild('roomId').equalTo(room.$id);
      return $firebaseArray(currentRoomMessages);
    };

    Message.send = function(newMessage, roomId) {
      var messageToBeSent = {
        content: newMessage,
        roomId: roomId,
        userName: $cookies.get('blocChatCurrentUser')
      };
      messages.$add(messageToBeSent);
    };

    return Message;
  }

  angular
  .module('bloc-chat')
  .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
