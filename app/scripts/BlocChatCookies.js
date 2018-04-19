(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/userModal.html',
        backdrop: 'static',
        keyboard: false,
        controller: function($scope, $uibModalInstance) {
          $scope.userName;
           $scope.ok = function (userName) {
             if(!userName){
               window.alert('Username required to enter BlocChat')
             } else {
               $cookies.put('blocChatCurrentUser', userName);
               $uibModalInstance.close();
             }
           };

        }
      })
    }
  }

  angular
    .module('bloc-chat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
