


$(() => {

  // sticky navbar 
  window.onscroll = function() {myFunction()};
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;
  function myFunction() {
    // if moved from the top, add class to navbar  
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky-top")
    } else {
      navbar.classList.remove("sticky-top");
    }
  };

  // if moved from the top, compose button adds a class
  const $nbr = $('.navbarRight');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $nbr.addClass('no-show');
    } else {
      $nbr.removeClass('no-show');
    }
  });

  // when the compose button is clicked, toggle the input field
  $('.bounce-arrow').click(() => { 
    $('.new-tweet').toggle(500, () => {});
    $('#tweet-text').focus();
  })
});