


$(() => {

  // sticky navbar 
  window.onscroll = function() {myFunction()};
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky-top")
    } else {
      navbar.classList.remove("sticky-top");
    }
  };


  const $nbr = $('.navbarRight');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $nbr.addClass('no-show');
    } else {
      $nbr.removeClass('no-show');
    }
  });



  $('.bounce-arrow').click(() => { 
    $('.new-tweet').toggle(500, () => {});
    $('#tweet-text').focus();
  })
});