(function() {
  function AddCtrl(RoomService, $uibModal, $scope) {

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
