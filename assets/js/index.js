jQuery(document).ready(
  function() {

    var $w = $(window);
    var $d = $('#oh');
    var $y = $('#yeah');
    var $c = $('#commom');
    var $b = $('#baby');

    var lastScrollTop = $w.scrollTop();

    var _x = 0;
    var _y = 0;

    $(window).scroll(function(event) {
      var st = $w.scrollTop();

      _x = st;
      _y = st;

      lastScrollTop = st;
      
      $d.css('right', _x);
      $d.css('bottom', _y);
      
      $y.css('left', _x);
      $y.css('top', _y);
      
      //-----------
      var $myElement = $('#second-container'),
        canUserSeeIt = inViewport($myElement);
        
        
        if(canUserSeeIt){
          $c.css({'right': _y});
          $b.css({'left': _x});
        }
    });
    
    //check if el is visible in viewport
    function inViewport($ele) {
      var lBound = $(window).scrollTop(),
        uBound = lBound + $(window).height(),
        top = $ele.offset().top,
        bottom = top + $ele.outerHeight(true);

      return (top > lBound && top < uBound) ||
        (bottom > lBound && bottom < uBound) ||
        (lBound >= top && lBound <= bottom) ||
        (uBound >= top && uBound <= bottom);
    }
  });