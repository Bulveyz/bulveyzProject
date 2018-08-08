$(document).ready(function () {
  if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $('.js-parallax-header').parallax("50%", .3);
  }

  if ($('.js-navbar-scroll').offset().top > 150) {
    $('.js-navbar-scroll').addClass('navbar-bg-onscroll');
  }

  // Check to add a background class on scrolling
  $(window).on('scroll', function() {
    var navbarOffset = $('.js-navbar-scroll').offset().top > 150;
    if(navbarOffset) {
      $('.js-navbar-scroll').addClass('navbar-bg-onscroll');
    }
    else {
      $('.js-navbar-scroll').removeClass('navbar-bg-onscroll');
    }
  });
});