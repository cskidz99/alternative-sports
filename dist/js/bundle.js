'use strict';

angular.module('altSprts', ['ui.router', 'wu.masonry']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('writings', {
        url: '/writings',
        templateUrl: "./views/writings.html",
        controller: "writingCtrl"
    }).state('photos', {
        url: '/photos',
        templateUrl: "./views/photos.html",
        controller: "photoCtrl"
    }).state('home', {
        url: '/',
        templateUrl: "./views/home.html",
        controller: "quoteCtrl"
    }).state('events', {
        url: '/events',
        templateUrl: "./views/events.html"
    }).state('contact', {
        url: '/contact',
        templateUrl: "./views/contact.html",
        controller: "submitCtrl"
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

angular.module('altSprts').controller('submitCtrl', function ($scope, writingSrvc) {

  $scope.addWork = function () {
    var newWriting = {
      author: $scope.newAuthor,
      w: $scope.newWork
    };
    if (writingSrvc.addData(newWriting)) {
      $scope.newAuthor = '';
      $scope.newWork = '';
    }
  };
});
'use strict';

angular.module('altSprts').controller('writingCtrl', function ($scope, writingSrvc) {

  $scope.writings = writingSrvc.getData();
});
'use strict';

angular.module('altSprts').directive('animations', function () {
  return {
    restrict: 'EA',
    link: function link(scope, elem, attr) {
      $(window).on('scroll', function () {
        var winScroll = $(this).scrollTop();
        // console.log(winScroll);

        if (winScroll > 0 && winScroll < 195) {
          $('.masonry-brick').css({
            'transform': 'matrix(' + winScroll / 200 + ', 0, 0, ' + winScroll / 200 + ', 0, 0)',
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
    templateUrl: './templates/magFooter.html'
  };
});
'use strict';

angular.module('altSprts').directive('magHeader', function () {
  return {
    restrict: 'E',
    templateUrl: '.``/templates/magHeader.html'
  };
});
'use strict';

angular.module('altSprts').service('quoteService', function ($http, $q) {

  this.getQuotes = function () {
    return $http({
      method: 'GET',
      url: '//ron-swanson-quotes.herokuapp.com/v2/quotes'
    }).then(function (response) {
      return response.data;
      // console.log(response.data);
    });
  };
});
'use strict';

angular.module('altSprts').service('writingSrvc', function () {

  var writings = [{
    author: 'John Doe',
    w: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    author: 'Jane Doe',
    w: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labrum.'
  }, {
    author: 'Shakespeare',
    w: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labrum.'
  }, {
    author: 'Walt Whitman',
    w: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offica deserunt mollit anim id est labrum.'
  }, {
    author: 'James Joyce',
    w: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labrum.'
  }, {
    author: 'Some other person',
    w: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labrum.'
  }, {
    author: 'More peeps',
    w: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labrum.'
  }];

  this.addData = function (newWriting) {
    if (newWriting.author && newWriting.w) {
      writings.unshift(newWriting);
      return true;
    }
    return false;
  };

  this.getData = function () {
    return writings;
  };
});
//# sourceMappingURL=bundle.js.map
