// Homework 2 - Wednesday

// The Recipe Card

var recipe = {
  title: "Bolognese",
  servings: 5,
  ingredients: ["pasta", "sauce", "cheese"]
};

console.log(recipe.title);
console.log("servings: " + recipe.servings);

for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}

// The Reading List

// This is an array that contains objects
var books = [
  {
    title: "The Silk Road",
    author: "Peter Frankopan.",
    bookRead: true
  },
  {
    title: "The sorcerers stone",
    author: "Harry Potty",
    bookRead: true
  },
  {
    title: "Peter Pan",
    author: "Tinker Bell",
    bookRead: false
  }
];

for (var i = 0; i < books.length; i++) {
  if (books[i].bookRead) {
    // console.log(`you already read ${books.title} by ${ books.author}!`)
    console.log(
      "You already read " + books[i].title + " by " + books[i].author
    );
  } else {
    console.log(
      "You still need to read " + books[i].title + " by " + books[i].author
    );
  }
}

// The Movie Database

var movies = {
  title: "The Movie",
  duration: 60,
  stars: ["Ryan", "Emma", "Jack"]
};

// moviesInfo is the name of the function and aMovie is a parameter for the object given to the function
function moviesInfo(aMovie) {
  console.log(
    aMovie.title +
      " lasts for " +
      aMovie.duration +
      " minutes. " +
      "Stars: " +
      aMovie.stars.join(", ")
  );
}

// a movies object is passed into the moviesInfo function where it becomes aMovie
moviesInfo(movies);
