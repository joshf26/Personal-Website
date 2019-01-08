$('#contact').click(function () {
  $('#contact-popup').animate({
    left: '10%',
    right: '10%'
  }, 500);
  $('#page-mask').animate({
    opacity: '1'
  }, 500);
});

$('#close').click(function () {
  $('#contact-popup').animate({
    left: '-50%',
    right: '150%'
  }, 500);
  $('#page-mask').animate({
    opacity: '0'
  }, 500);
});
