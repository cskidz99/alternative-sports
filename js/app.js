'use strict';

angular
  .module('demoApp', ['ngPhotoswipe'])
  .controller('demoCtrl', demoCtrlFn);

function demoCtrlFn() {
  var vm = this;

  vm.title = 'Alternative Sports';

  vm.opts = {
    index: 0
  };

  vm.slides = [{
      src: 'http://lorempixel.com/500/500/business/1',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business/2',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business/3',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business/4',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business/5',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business/6',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business/7',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business/8',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business/9',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business/10',
      w: 500, h: 500
    }];

  vm.showGallery = function (i) {
    if(angular.isDefined(i)) {
      vm.opts.index = i;
    }
    vm.open = true;
  };

  vm.closeGallery = function () {
    vm.open = false;
  };
}

angular.element(document).ready(function() {
  angular.bootstrap(document, ['demoApp']);
});
