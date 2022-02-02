$(() => {
  const $article = $('#article');


  // sticky navbar 
  window.onscroll = function() {myFunction()};
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  };

  // hover over Tweet button
  const $button =$('form button');
  $button.mouseenter(() => {
    $button.css('box-shadow', '8px 5px #D3D3D3');
    $button.css('background-color', '#191970');
    $button.css('transition', '.4s');
  })
  $button.mouseleave(() => {
    $button.css('box-shadow', 'none');
    $button.css('background-color', '#4056A1');
    $button.css('transition', '.4s');
  })

  // hover over articles
  $article.mouseenter(() => {
    $article.css('box-shadow', '12px 7px #D3D3D3');
    $article.css('transition', '.4s');
  })
  $article.mouseleave(() => {
    $article.css('box-shadow', 'none');
    $article.css('transition', '.4s');
  })

  // hover over icons
  const $icon1 = $('.icon1');
  const $icon2 = $('.icon2');
  const $icon3 = $('.icon3');
  $icon1.mouseenter(() => {
    $icon1.css('color', '#8B0000');
    $icon1.css('transition', '.3s');
  })
  $icon1.mouseleave(() => {
    $icon1.css('color', '#4056A1');
    $icon1.css('transition', '.3s');
  })

  $icon2.mouseenter(() => {
    $icon2.css('color', '#8B0000');
    $icon2.css('transition', '.3s');
  })
  $icon2.mouseleave(() => {
    $icon2.css('color', '#4056A1');
    $icon2.css('transition', '.3s');
  })

  $icon3.mouseenter(() => {
    $icon3.css('color', '#8B0000');
    $icon3.css('transition', '.3s');
  })
  $icon3.mouseleave(() => {
    $icon3.css('color', '#4056A1');
    $icon3.css('transition', '.3s');
  })

});