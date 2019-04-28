// Homework 17th of April 2019

// 1. Max of two numbers:
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in JavaScript. Do some Googling to figure this out if you
// forget how conditionals work.

// 2. Vowel Count:
// Return the number of occurrences of vowels in a word. Vowels are a, e, i, o, u, and y

// Function signature (only look at this after you've thought about what it should look like)


var maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
maxOfTwoNumbers(23, 5);

var signature = function(word) {
  var vowels = word.match(/[aeiouy]/gi); // g - (g)lobal, i - case (i)nsensitive

  if (vowels === null) {
    return 0;
  } else {
    return vowels.length;
  }
};

signature("Australia");

