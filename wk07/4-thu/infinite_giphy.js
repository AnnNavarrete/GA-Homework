// pseudocode
// step1
// get API access to giphy and read documentation
// connect API to client side and request giphy

// step2
// setup scroll limit
// create a button to request for more giphy

var button = document.querySelector("button");
var numOfScrolls = 0;

var handleClick = function(event) {
  event.preventDefault();
  if (numOfScrolls < 5) {
    getMoreGif();
  } else if (numOfScrolls === 5) {
    var buttonToScroll = $("<button>Search for more GIFs</button>");
    buttonToScroll.click(getMoreGif);
    $("#searchResults").append(buttonToScroll);
  }
  numOfScrolls += 1;
};

var getMoreGif = function() {
  var userInput = $("#form-value")
    .val()
    .trim();

  userInput = userInput.replace(/ /g, "+");

  var queryURL =
    "http://api.giphy.com/v1/gifs/search?q=" +
    userInput +
    "&api_key=eNyI6zEhtmECaG3NHuCM3VZ3HSCjM8su" +
    "&limit=5";

  $.get(queryURL).done(function(response) {
    console.log(response.data);

    for (var i = 0; i < response.data.length; i++) {
      var giphyURL = response.data[i].images.fixed_height.url;
      var newImg = $("<img>");
      newImg.attr("src", giphyURL);
      $("#searchResults").append(newImg);
      console.log(giphyURL);
    }
  });
};

button.addEventListener("click", handleClick);
window.addEventListener("scroll", handleClick);
