(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(room) {
      var currentRoomMessages = ref.orderByChild('roomId').equalTo(room.$id);
      return $firebaseArray(currentRoomMessages);
   };

   Message.send = function(newMessage) {
     console.log('This be workin mon');
  };

    return Message;
  }

  angular
    .module('bloc-chat')
    .factory('Message', ['$firebaseArray', Message]);
})();
