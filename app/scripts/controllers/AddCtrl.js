(function() {
  function AddCtrl(RoomService, $uibModal, $scope) {
    $scope.openModal = function () {
    $uibModal.open({
      templateUrl: '/modal.html',
      controller: function ($scope, $uibModalInstance) {
        $scope.ok = function () {
          $uibModalInstance.close();
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      }
    })
    }
  }

  angular
    .module('bloc-chat')
    .controller('AddCtrl', ['RoomService', '$uibModal', '$scope', AddCtrl]);
})();
