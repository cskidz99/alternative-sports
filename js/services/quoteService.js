angular.module('altSprts').service('quoteService', function($http, $q) {

  this.getQuotes = function() {
    return $http({
        method: 'GET',
        url: '//ron-swanson-quotes.herokuapp.com/v2/quotes'
    }).then(function(response){
      return response.data;
      // console.log(response.data);
    });
  };
});
