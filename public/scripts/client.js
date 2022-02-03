/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(() => {
  // first loads what we have in the database
  loadTweets();

  // when submit button is clicked, it checks for valitdation, if all good, send a post request to the server
  $('#tweet-form').on('submit', (event) => {
    event.preventDefault();

    // checks if input is empty, show error msg
    if ( $('#tweet-text').val() === '' || $('#tweet-text').val() === null) {
      $('.empty-error').slideDown(600, () => {
        $('.empty-error').css('display', 'flex');
      });
    }

    //checks if over input limit, show error msg
    if ( Number($('#tweet-text').val().length) > 140 ) {
      $('.limit-error').slideDown(600, () => {
        $('.limit-error').css('display', 'flex');
      })
      $('#tweet-text').focus();
      return;
    }

    // when user start typing again, retract all the error message(s)
    $('#tweet-text').on('input', () => {
      $('.limit-error').slideUp(600, () => {
        $('.limit-error').css('display', 'none');
      });
      $('.empty-error').slideUp(600, () => {
        $('.empty-error').css('display', 'none');
      });
    });

    // serialize the input into a encrypted url and post to server
    const data = $('#tweet-form').serialize();
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data,
    }).then( () => {
      // if success, return input area to empty and put focus on it, reset the counter and reload the tweets
      $('#tweet-text').val('').focus();
      $('.counter').html(140);
      loadTweets();
    });
  });
})


// the template for new tweets
const createTweetElement = (data) => {
  const ago = timeago.format(data.created_at); 

  const $username = $('<div>').addClass('name');
  const $name = $('<div>').text(data.user.name);
  const $avatar = $('<div>').prepend(`<img src=${data.user.avatars}/>`);
  $username.append($avatar, $name);

  const $handle = $('<div>').addClass('nameAt').text(data.user.handle);
  const $header = $('<header>').addClass('user');
  $header.append($username, $handle);

  const $text = $('<p>').text(data.content.text);
  const $content = $('<section>').addClass('content');
  $content.append($text);

  const $icons = $('<div>').addClass('icons')
  const $icon3 = $('<div>').addClass("icon3");
  const $heart = $('<i>').addClass('fa-solid fa-heart');
  const $icon2 = $('<div>').addClass("icon2");
  const $retweet = $('<i>').addClass('fa-solid fa-retweet');
  const $icon1 = $('<div>').addClass("icon1");
  const $flag = $('<i>').addClass('fa-solid fa-flag');
  $icon1.append($flag);
  $icon2.append($retweet);
  $icon3.append($heart);
  $icons.append($icon1, $icon2, $icon3);
  const $createdAt = $('<div>').addClass('timeago').text(ago);
  const $footer = $('<footer>').addClass('footer');
  $footer.append($createdAt, $icons);

  const $article = $('<article>').addClass("user-article");
  $article.append($header, $content, $footer);

  return $article;
};


// loop through the data and print out the html for each user, and add them to the container
const renderTweets = (tweets) => {
  const $container = $('#tweet-container');
  // emptying the list before replacing with a whole new database
  $container.empty();
  for (const tweet of tweets) {
    const element = createTweetElement(tweet);
    $container.prepend(element);
  }
};

// get request to load the tweets
const loadTweets = () => {
  $.ajax({
    url: '/tweets',
    method: 'GET',
  }).then((data) => {
    renderTweets(data);
  })
};