/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(() => {

  loadTweets();

  $('#tweet-form').on('submit', (event) => {
    event.preventDefault();

    if ( $('#tweet-text').val() === '' || $('#tweet-text').val() === null) {
      $('.empty-error').slideDown(600, () => {
        $('.empty-error').css('display', 'flex');
      });
    }
    if ( Number($('#tweet-text').val().length) > 140 ) {
      $('.limit-error').slideDown(600, () => {
        $('.limit-error').css('display', 'flex');
      })
      $('#tweet-text').focus();
      return;
    }

    $('#tweet-text').on('input', () => {
      $('.limit-error').slideUp(600, () => {
        $('.limit-error').css('display', 'none');
      });
      $('.empty-error').slideUp(600, () => {
        $('.empty-error').css('display', 'none');
      });
    });

    const data = $('#tweet-form').serialize();
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data,
    }).then( () => {
      $('#tweet-text').val('').focus();
      $('.counter').html(140);
      loadTweets();
    });
  });
})

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

  const $article = $('<article>').addClass("article");
  $article.append($header, $content, $footer);

  return $article;
};

const renderTweets = (tweets) => {
  const $container = $('#tweet-container');
  $container.empty();
  for (const tweet of tweets) {
    const element = createTweetElement(tweet);
    $container.prepend(element);
  }
};


const loadTweets = () => {
  $.ajax({
    url: '/tweets',
    method: 'GET',
  }).then((data) => {
    renderTweets(data);
  })
};