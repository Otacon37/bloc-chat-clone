(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    return Room;
  }

  angular
    .module('bloc-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();
