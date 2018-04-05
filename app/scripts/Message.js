(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    console.log($firebaseArray(ref)[1]);

    return Message;
  }

  angular
    .module('bloc-chat')
    .factory('Message', ['$firebaseArray', Message]);
})();
