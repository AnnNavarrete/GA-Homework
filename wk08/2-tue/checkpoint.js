const users = [
  { id: 1, username: "Apple", active: true, age: 20 },
  { id: 2, username: "Banana", active: false, age: 35 },
  { id: 3, username: "Ear", active: false, age: 60 },
  { id: 4, username: "Dog", active: true, age: 65 },
  { id: 5, username: "Cat", active: true, age: 80 },
  { id: 6, username: "Ear", active: true, age: 95 }
];

// write code to get an array of all users that have the username "Ear"
users.filter(username => username.username === "Ear");

// write code to get an array of all users with an age of 60 or over
users.filter(username => username.age > 60);

// write code to get an array of all ids in users
users.map(username => username.id);

// write a function that calculate the average age of all users

let totalAge = 0;
const length = users.length;

users.forEach(user => {
  totalAge += user.age;
});
const averageAge = totalAge / length;
console.log(averageAge);

// sort the users by username in ascending order
users.sort((a, b) => a.username.localeCompare(b.username));

const words = [
  "apple",
  "banana",
  "cat",
  "cake pudding",
  "Dog",
  "ear",
  "flower",
  "flower",
  "goat",
  "Halloween",
  "I see no X here",
  "I am a developer"
];

// console log each word in words in uppercase excluding the first word
// destructuring the array to get first item out and hold on to the rest
const [first, ...rest] = words;
rest.forEach(word => {
  console.log(word.toUpperCase());
});

// write code to count the number of words with more than 5 letters
words.forEach(count => {
  if (count.length > 5) {
    console.log(count.length);
  }
});

// get an array of words with each word's first character capitalize

words.map(word => {
  const [first, ...rest] = word;
  return first.toUpperCase() + rest.join("");
});
