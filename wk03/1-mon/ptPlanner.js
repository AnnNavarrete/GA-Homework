/* Homework 8th of April 2019

PT PLANNER
Melbourne Public Transport Journey Planner
There are 3 train lines:

The Alamein line has the following stops:
Flinders Street - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie

The Glen Waverly line has the following stops:
Flagstaff - Melbourne Central - Parliament - Richmond - Kooyong - Tooronga

The Sandringham line has the following stops:
Southern Cross - Richmond - South Yarra - Prahran - Windsor

All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

Given an origin and a destination. Write a program that display the journey similar the one shown below.

example:

origin: Melbourne Central
destination: Richmond

Melbourne Central -----> Parliament -----> Richmond

2 stops total

Hints:
You may want to hard code the origin and destination stations and lines instead of getting user input for 
easier testing during development.

Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think 
about what data structure to use to store each line and all the stops on each line.

The key to the lab is the intersection of the lines at Richmond, you can assume that's the only intersection.

Non-Required Bonus:
input validation
User must enter a line and station in the subway network
If the user enters something else, your program should handle it*/

/* pseudocode
1. find the train line for my destination
    for each object in trainline, check if destination exist in trainline (loops)
    
2. find me the train line of my origin
    if it exist, check if origin and destination is in the same trainline

3a. if they're the same train line, only need to compare Origin and Destination on the same stops array

3b. if they're different train lines
  - work out stops for Origin trainline for Origin to Richmond stops, from either direction
  - work out stops for Destination trainline for Richmond to Destination stops, from either direction
  - concat the two arrays together

finally, print the relevant info out*/

// tools to consider:
// for loops to loop through the array
// slice method, to return the elements we want to print
// indexOf, to find the starting origin and destination
// concat to join the trainlines routes
// if same code keeps repeating over and over, look for common pattern and consider a function*/

var trainline = [
  {
    lineName: "Alamein",
    stops: [
      "Flinders Street",
      "Richmond",
      "East Richmond",
      "Burnley",
      "Hawthorn",
      "Glenferrie"
    ]
  },
  {
    lineName: "Glen Waverly",
    stops: [
      "Flagstaff",
      "Melbourne Central",
      "Parliament",
      "Richmond",
      "Kooyong",
      "Tooronga"
    ]
  },
  {
    lineName: "The Sandringham",
    stops: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
  }
];

// Function for finding the trainline for the destination
var testOrigin = "Flinders Street";
var testDestination = "Hawthorn";

var findTrainline = function(stop) {
  for (var i = 0; i < trainline.length; i++) {
    var currentLine = trainline[i];
    if (currentLine.stops.indexOf(stop) >= 0) {
      return currentLine;
    }
  }
};
var currentLine = findTrainline("Hawthorn");

var getStops = function(origin, destination) {
  var originTrainline = findTrainline(origin);
  var destinationTrainline = findTrainline(destination);
  if (originTrainline === destinationTrainline) {
    var originStart = originTrainline.stops.indexOf(origin);
    var destinationEnd = originTrainline.stops.indexOf(destination);
    if (originStart > destinationEnd) {
      // scenario two
      return originTrainline.stops
        .slice(destinationEnd, originStart + 1)
        .reverse();
    } else {
      // scenario one
      return originTrainline.stops.slice(originStart, destinationEnd + 1);
    }
  }
};

var printStops = function() {
  var stops = getStops(testOrigin, testDestination);
  console.log(`${stops.join(" ---> ")}`);
  console.log(`${stops.length - 1} stops in total`);
};

printStops();
