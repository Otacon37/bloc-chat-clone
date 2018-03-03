(function() {
  function AddCtrl(RoomService, $uibModal, $scope) {

    function uibModalController($scope, $uibModalInstance) {
       $scope.ok = function (roomName) {
         RoomService.add(roomName);
         $uibModalInstance.close();
       };

       $scope.cancel = function () {
         $uibModalInstance.dismiss('cancel');
       };
    }
ß
  }

  angular
    .module('bloc-chat')
    .controller('AddCtrl', ['RoomService', '$uibModal', '$scope', AddCtrl]);
})();
