


const keypress = document.getElementById('tweet-text');


$(keypress).on('keypress', function() {
  // $("output").text("--");
  console.log(this);
});

