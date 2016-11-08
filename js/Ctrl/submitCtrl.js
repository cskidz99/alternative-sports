angular.module('altSprts').controller('submitCtrl', function($scope,writingCtrl) {

  $scope.addWork = function(){
    var newWriting = {
      author:$scope.newAuthor,
      w:$scope.newWork
    }
    if(writingCtrl.addData(newQuote)){
      $scope.newAuthor = '';
      $scope.newWork = '';
    }
}

});
