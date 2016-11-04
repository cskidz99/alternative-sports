angular.module('altSprts').directive('animations',function(){
  return {
    restrict: 'EA',
    link: function(scope,elem,attr){
      $(window).on('scroll', function() {
        let winScroll = $(this).scrollTop();
        console.log(winScroll);

        if (winScroll > 0 && winScroll < 145) {
        $('.masonry-brick').css({
          'transform': 'matrix(' + winScroll/150 + ', 0, 0, ' + winScroll/150 +', 0, 0)',
          'opacity': winScroll/100
        });
        }
      })
    }
  }
})
