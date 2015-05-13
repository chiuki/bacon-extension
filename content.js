var tweets = document.getElementsByClassName("ProfileTweet-text");

for (var i = 0; i < tweets.length; ++i) {
  var html = tweets[i].innerHTML;
  html = html.replace(/[A-Z]+[a-z]*([ !,.:]?)/g, "Bacon\$1");
  tweets[i].innerHTML = html;
}