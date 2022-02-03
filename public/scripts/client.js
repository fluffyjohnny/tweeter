/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//main function of this file
$(() => {

  loadTweets();

  $('#tweet-form').on('submit', (event) => {
    event.preventDefault();

    if ( $('#tweet-text').val() === '' || $('#tweet-text').val() === null) {
      alert('Input Box Cannot be Empty!');
    }
    if ( Number($('#tweet-text').val().length) > 140 ) {
      alert('Input Number exceeded Maximum!');
      $('#tweet-text').val('').focus();
      $('.counter').html(140);
      $('.counter').css('color', '#545149');
    }

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

  const element = $(`
    <article class="article">
    <header class="user">
      <div class="name">
        <div>
          <img src=${data.user.avatars}/>
        </div>
        <div>${data.user.name}</div>
      </div>
      <div class="nameAt">
        ${data.user.handle}
      </div>
    </header>
    <section class="content">
      <p> ${data.content.text}</p>
    </section>
    <footer class="footer">
      <div class="timeago">
        ${ago}
      </div>
      <div>
      <div class="icons">
        <div class="icon1">
          <i class="fa-solid fa-flag"></i>
        </div>
        <div class="icon2">
          <i class="fa-solid fa-retweet"></i>
        </div>
        <div class='icon3'>
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
    </footer>
  </article>`);

  return element;
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


// the more complicated way but did it for practice
const createTweetElementOld = (data) => {

  const $username = $('<div>').addClass('name');
  const $name = $('<div>').text(data.user.name);
  const $avatar = $('<div>').prepend(`<img src="${data.user.avatar}" />`);
  $username.append($avatar, $name);

  const $handle = $('<div>').addClass('nameAt').text(data.user.handle);
  const $header = $('<header>').addClass('user');
  $header.append($username, $handle);

  const $text = $('<p>').text(data.content);
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
  const $createdAt = $('<div>').addClass('timeago').text('<% timeago.format(new Date()); %>');
  const $footer = $('<footer>').addClass('footer');
  $footer.append($createdAt, $icons);

  const $article = $('<article>').addClass("article");
  $article.append($header, $content, $footer);

  const $oldTweet = $('#old-tweet');
  $oldTweet.append($article);
};