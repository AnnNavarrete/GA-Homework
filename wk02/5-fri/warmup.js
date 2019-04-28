// loops
// arrays
// object lookups
// functions
// DOM

var sizes = [500, 100, 300, 900];

// find the largest number

// assign a variable to hold the largest number. Make it the first item in the array.
var largest = sizes[0];
// loop the array
for (var i = 0; i < sizes.length; i++) {
  var currentSizeItem = sizes[i];
  if (currentSizeItem > largest) {
    largest = currentSizeItem;
  }
}
console.log(largest);

// for each item, check if it's larger than the 'largest number' variable
//   if it is, update 'largest number' to be this items value
// else continue to the next loop

// once the loop has finished, console log out the 'largest number' variable

var cities = [
  {
    name: "Melbourne",
    size: 5000000
  },
  {
    name: "Auckland",
    size: 1500000
  },
  {
    name: "London",
    size: 9000000
  }
];

// print out each city and its population, i.e 'CITY_NAME has a population of XXXX people'
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  console.log(`${city.name} has a population of ${city.size} of people`);
}

// Find and print the name of the largest city, i.e 'CITY_NAME has a population of XXXX people'

var biggestCity = cities[0];

for (var i = 0; i < cities.length; i++) {
  var currentCity = cities[i];
  if (biggestCity.size < currentCity.size) {
    biggestCity = currentCity;
  }
}
console.log(
  `The largest city is ${biggestCity.name} has a population of ${
    biggestCity.size
  } of people`
);

// Calculate the average size of all the cities

var totalPopulation = 0;

for (var i = 0; i < cities.length; i++) {
  var currentCity = cities[i];
  totalPopulation += currentCity.size;
}
console.log(
  `The average size of each city is ${Math.floor(
    totalPopulation / cities.length
  )}`
);
