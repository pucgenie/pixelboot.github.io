$(window).scroll (function() {
		if($(window).scrollTop() > 0) {
				$('.navbar').addClass('navbar-white');
		}
		else if (!$('#navbar').hasClass('in')) {
				$('.navbar').removeClass('navbar-white');
		}
});

function backToTop() {
	if ($(window).height() < $(document).height()) {
		$('.backToTop').css( 'display', 'block');
	}
	else {
		$('.backToTop').css( 'display', 'none');
	}
}
$(window).resize(backToTop);
$(document).ready(backToTop);

$('.navbar-collapse').on('show.bs.collapse', function () {
		$('.navbar').addClass('navbar-white');
});

$('.navbar-collapse').on('hidden.bs.collapse', function () {
	if($(window).scrollTop() == 0) {
		$('.navbar').removeClass('navbar-white');
	}
});

$(function(){
	 function stripTrailingSlash(str) {
		 if(str.substr(-1) == '/') {
			 return str.substr(0, str.length - 1);
		 }
		 return str;
	 }

	 var url = window.location.pathname;
	 var activePage = stripTrailingSlash(url);

	 $('.nav li a').each(function(){
		 var currentPage = stripTrailingSlash($(this).attr('href'));

		 if (activePage == currentPage) {
			 $(this).parent().addClass('active');
		 }
	 });
 });

$(document.links).filter(function() {
		return this.hostname != window.location.hostname;
}).attr('target', '_blank');

$('a.page-scroll').bind('click', function(event) {
		$('html, body').stop().animate({
				scrollTop: ($($(this).attr('href')).offset().top)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
});

var c, currentScrollTop = 0,
navbar = $('.navbar');

$(window).scroll(function () {
	var a = $(window).scrollTop();
	var b = navbar.height();

	currentScrollTop = a;

	if (c < currentScrollTop && a > b + b) {
		navbar.addClass("scrollUp");
	} else if (c > currentScrollTop && !(a <= b)) {
		navbar.removeClass("scrollUp");
	}
	c = currentScrollTop;
});
