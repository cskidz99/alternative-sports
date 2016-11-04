'use strict';

angular.module('altSprts', ['ui.router', 'wu.masonry']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('writings', {
        url: '/writings',
        // parent:'home',
        templateUrl: "../views/writings.html"
    }).state('photos', {
        url: '/photos',
        // parent:'home',
        templateUrl: "../views/photos.html",
        controller: "photoCtrl"
    }).state('home', {
        url: '/',
        templateUrl: "../views/home.html",
        controller: "quoteCtrl"
    }).state('events', {
        url: '/events',
        // parent:'home',
        templateUrl: "../views/events.html"
    }).state('contact', {
        url: '/contact',
        // parent:'home',
        templateUrl: "../views/contact.html"
    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('altSprts').controller('mainCtrl', function () {});
'use strict';

angular.module('altSprts').controller('photoCtrl', function ($scope) {

  $scope.bricks = [{
    src: 'http://lorempixel.com/500/500/business/1',
    w: 300, h: 300
  }, {
    src: 'http://lorempixel.com/500/500/business/2',
    w: 300, h: 300
  }, {
    src: 'http://lorempixel.com/500/500/business/3',
    w: 300, h: 300
  }, {
    src: 'http://lorempixel.com/500/500/business/4',
    w: 300, h: 300
  }, {
    src: 'http://lorempixel.com/500/500/business/5',
    w: 300, h: 300
  }, {
    src: 'http://lorempixel.com/500/500/business/6',
    w: 300, h: 300
  }, {
    src: 'http://lorempixel.com/500/500/business/7',
    w: 300, h: 300
  }, {
    src: 'http://lorempixel.com/500/500/business/8',
    w: 300, h: 300
  }, {
    src: 'http://lorempixel.com/500/500/business/9',
    w: 300, h: 300
  }, {
    src: 'http://lorempixel.com/500/500/business/10',
    w: 300, h: 300
  }];
});
'use strict';

angular.module('altSprts').controller('quoteCtrl', function ($scope, quoteService) {
  $scope.getQuotes = function () {
    quoteService.getQuotes().then(function (dataFromService) {
      $scope.quote = dataFromService;
    });
  };

  $scope.getQuotes();
});
'use strict';

angular.module('altSprts').directive('animations', function () {
  return {
    restrict: 'EA',
    link: function link(scope, elem, attr) {
      $(window).on('scroll', function () {
        var winScroll = $(this).scrollTop();
        console.log(winScroll);

        if (winScroll > 0 && winScroll < 105) {
          $('.masonry-brick').css({
            'transform': 'matrix(' + winScroll / 100 + ', 0, 0, ' + winScroll / 100 + ', 0, 0)',
            'opacity': winScroll / 100
          });
        }
      });
    }
  };
});
'use strict';

angular.module('altSprts').directive('magFooter', function () {
  return {
    restrict: 'E',
    templateUrl: '../../templates/magFooter.html'
  };
});
'use strict';

angular.module('altSprts').directive('magHeader', function () {
  return {
    restrict: 'E',
    templateUrl: '../../templates/magHeader.html'
  };
});
'use strict';

angular.module('altSprts').service('quoteService', function ($http, $q) {

  this.getQuotes = function () {
    return $http({
      method: 'GET',
      url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
    }).then(function (response) {
      return response.data;
      // console.log(response.data);
    });
  };
});
//# sourceMappingURL=bundle.js.map
