// Homework 3 - Thursday

// Guess the fruit
// You are to create a basic guess my word game.
// Prepare a list of your favourite fruits and have the computer the pick a random fruit as the secret word. Prompt the user to guess the word until they guess correctly.
// You should give some hints so it's easier for the user to guess.
// So when prompting the user for a guess, tell them:
// the first letter and the last letter of the word
// the length of the word
// For example if the secret word is banana
// it is 6 characters long starts with b and ends with a. guess the fruit.

var fruits = ["apple", "oranges", "grapes", "kiwi", "melon"];
var randomGuessIndex = Math.floor(Math.random() * fruits.length);
var fruitToGuess = fruits[randomGuessIndex];

console.log(fruitToGuess);
var clues =
  "it is " +
  fruitToGuess.length +
  " characters long" +
  " starts with letter " +
  fruitToGuess[0] +
  " and ends with letter " +
  fruitToGuess[fruitToGuess.length - 1];

do {
  var guessTheFruit = String(prompt("Guess my fruit, " + clues));
} while (fruitToGuess != guessTheFruit);

alert("Congratulations, you've guess it right!");
