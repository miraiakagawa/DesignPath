angular.module("webdesfinalApp")

.controller("HomeCtrl", [ "$scope", function ($scope) {

  console.log('HomeCtrl');
  $scope.pageClass = 'page-home';

}])