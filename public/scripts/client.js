/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(() => {
  const $mainlist = $('#main-list');
  const $inputButton = $('#tweet-button');

  $inputButton.on('click', (event) => {
    event.preventDefault();
    const $inputField = $('#tweet-text');
    const $inputValue = $inputField.val();
    const $div = $('<div class="new-tweet">').text($inputValue);
    $mainlist.append($div);
    $inputField.val('').focus();
    $('.counter').html(140); 
  });
});