(function() {
  function ModalCtrl(RoomService, $uibModal, $scope) {
      $scope.openModal = function () {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: uibModalController
      })
    }
}

  angular
    .module('bloc-chat')
    .controller('ModalCtrl', ['RoomService', '$scope', '$uibModal', ModalCtrl]);
})();
