(function() {
  function AddCtrl(RoomService, $uibModal) {
    this.open = function() {
       var modalInstance = $uibModal.open({
                animation: true,
                template: '<div class="alert alert-primary" role="alert"> This is a primary alert—check it out! </div>',
                size: 'sm'
            });
    }
  }

  angular
    .module('bloc-chat')
    .controller('AddCtrl', ['RoomService', '$uibModal', AddCtrl]);
})();
