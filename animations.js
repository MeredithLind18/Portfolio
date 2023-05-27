$(document).ready(function() {
  $('.hero-container_img').addClass('rotate-animation');
  setTimeout(function() {
    $('.hero-container_img').removeClass('rotate-animation');
  }, 2000);
});
