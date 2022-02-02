/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(() => {
  const $article = $('#article');
  const $inputButton = $('#tweet-button');
  const $button =$('form button');
  const $icon1 = $('.icon1');
  const $icon2 = $('.icon2');
  const $icon3 = $('.icon3');

  $inputButton.on('click', (event) => {
    event.preventDefault();
    const $inputField = $('#tweet-text');
    const $inputValue = $inputField.val();
    const $div = $('<div class="new-tweet">').text($inputValue);
    $article.append($div);
    $inputField.val('').focus();
    $('.counter').html(140); 
  });

  $button.mouseenter(() => {
    $button.css('box-shadow', '8px 5px #D3D3D3');
    $button.css('transition', '.4s');
  })
  $button.mouseleave(() => {
    $button.css('box-shadow', 'none');
    $button.css('transition', '.4s');
  })

  $article.mouseenter(() => {
    $article.css('box-shadow', '12px 7px #D3D3D3');
    $article.css('transition', '.4s');
  })
  $article.mouseleave(() => {
    $article.css('box-shadow', 'none');
    $article.css('transition', '.4s');
  })

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