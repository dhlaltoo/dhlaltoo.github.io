"ust strict"

$(document).ready(function() {

  // Slow redirect
  $('.connect-nav').on('click', function (e) {
    e.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  // Parallax
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  });

  // Tooltip
  $('.tooltipped').tooltip();

  // Carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  // $('#Async').onclick({
  //   url = "projects.html/#AsynchronousChat";
  //   $(location).attr("href, url");
  // });

}); // End document.ready