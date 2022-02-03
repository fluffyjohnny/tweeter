

const input = document.getElementById('tweet-text');


$(input).on('input', function() {
  let count = Number($(this).val().length)

  if (count > 140) {
    $('.counter').css('color', '#8B0000');
    $('.counter').html(140 - count);
  } 
  if (count < 140) {
    $('.counter').css('color', '#545149');
    $('.counter').html(140 - count);
  }
});