var blogApp = angular.module('blogApp', ['ui.bootstrap']);

blogApp.controller('SidebarCtrl', ['$scope', function($scope) {
  $scope.email = 'http://www.gravatar.com/avatar/' + md5('joris.w.dewit@gmail.com');
}]);
