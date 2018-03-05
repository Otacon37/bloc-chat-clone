(function() {
  function ModalCtrl(RoomService, $uibModal, $scope) {

    function uibModalController($scope, $uibModalInstance) {
      $scope.roomName;
       $scope.ok = function (roomName) {
         RoomService.add(roomName);
         $uibModalInstance.close();
       };

       $scope.cancel = function () {
         $uibModalInstance.dismiss('cancel');
       };
    }

    $scope.openModal = function () {
    $uibModal.open({
      templateUrl: '/templates/modal.html',
      controller: uibModalController
    })
  }
  }

  angular
    .module('bloc-chat')
    .controller('ModalCtrl', ['RoomService', '$uibModal', '$scope', ModalCtrl]);
})();
