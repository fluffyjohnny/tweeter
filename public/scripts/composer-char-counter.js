


const input = document.getElementById('tweet-text');


$(input).on('input', function() {
  let count = Number($(this).val().length)

  if (count > 140) {
    $('.counter').css('color', '#8B0000');
    $('.counter').html(140 - count);
  } else {
    $('.counter').html(140 - count);
  }
});


$(input).on('input', function() {
  console.log($(".counter"));
});
