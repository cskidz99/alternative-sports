angular.module('altSprts').controller('submitCtrl', function($scope,writingSrvc) {

  $scope.addWork = function(){
    var newWriting = {
      author:$scope.newAuthor,
      w:$scope.newWork
    }
    if(writingSrvc.addData(newWriting)){
      $scope.newAuthor = '';
      $scope.newWork = '';
    }
}

});
