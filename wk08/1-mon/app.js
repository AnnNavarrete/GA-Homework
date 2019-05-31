const form = document.getElementById("color-form");
const colorInput = document.getElementById("color-input");
let brushColor = "white";

// creating 3,000 divs for the paint board
const container = document.querySelector(".container");
for (let i = 0; i < 3000; ++i) {
  const div = document.createElement("div");
  div.setAttribute("class", "square");
  div.setAttribute("id", "div" + i);
  // track the mouseover for each div to change it's colour
  div.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = brushColor;
  });
  container.appendChild(div);
}

// handle color form input, both click and enter button
form.addEventListener("submit", function(event) {
  event.preventDefault();
  brushColor = colorInput.value;
  colorInput.value = "";
  document.querySelector(".brush-box").style.backgroundColor = brushColor;
});

// set up a reset button to remove color drawn
const resetButton = document.getElementById("reset-color");
resetButton.addEventListener("click", function() {
  document.querySelectorAll("div.square").forEach(function(element) {
    element.style.backgroundColor = "";
  });
});

// link ombdi to search for movies and get poster image for background
const searchMovie = document.getElementById("search-movie");
const movieInput = document.getElementById("movie-input");
searchMovie.addEventListener("submit", function(event) {
  event.preventDefault();
  const movie = movieInput.value;
  movieInput.value = "";
  const url = `http://omdbapi.com/?s=${movie}&apikey=2f6435d9`;

  // fetch gets the data from the api
  // because I don't know when 'fetch' will get data back from api,
  // I have to use then which is a 'promise' that fetch will return something for me in the future
  // if 'then' is NOT used, all the code after fetch will be blocked from running until the data returns from api

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(movieInfo) {
      const posterUrl = movieInfo.Search[0].Poster;
      console.log(posterUrl);
      document.body.style.backgroundImage = `url('${posterUrl}')`;
    });
});
