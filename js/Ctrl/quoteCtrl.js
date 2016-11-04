angular.module('altSprts').controller('quoteCtrl', function($scope, quoteService) {
  $scope.getQuotes = function() {
    quoteService.getQuotes().then(function(dataFromService) {
      $scope.quote = dataFromService;
    });
  };

  $scope.getQuotes();


});
