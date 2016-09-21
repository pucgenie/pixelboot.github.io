function checkScroll(){
  
    if($(window).scrollTop() > 0) {
        $('.navbar').addClass("scrolled");
    }
    else if ($(window).scrollTop() == 0) {
        $('.navbar').removeClass("scrolled");
    }
  
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

$('.navbar-collapse').on('show.bs.collapse', function () {
    $('.navbar').addClass("scrolled");
});

$('.navbar-collapse').on('hidden.bs.collapse', function () {
  
  if($(window).scrollTop() == 0) {
    $('.navbar').removeClass("scrolled");
  }
  
});

(function($) {
    "use strict";

  $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
  
  new WOW().init();

})(jQuery);