

$(() => {

  // when scrolled down, arrow appears or dissapears
  const $btn = $('.bottom-arrow');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $btn.addClass('show');
    } else {
      $btn.removeClass('show');
    }
  });

  // when clicked on the button, take us to the top of page
  $btn.on('click', function() {
    $('.new-tweet').css('display', 'inline');
    $('html, body').animate({scrollTop:0}, '400');
    $('#tweet-text').focus();
  });
});