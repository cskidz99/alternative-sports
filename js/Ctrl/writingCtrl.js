angular.module('altSprts').controller('writingCtrl', function($scope,writingSrvc) {

  $scope.writings = writingSrvc.getData();


});
