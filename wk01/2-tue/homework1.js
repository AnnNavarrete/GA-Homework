// Homework 1 - Tuesday

// The even/odd reporter
for (var i = 0; i <= 20; i++) {
    if (i === 0) {
        console.log(i + ' is even');
    } else if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

// Multiplication Tables
var multiplier = 9;

for (var i = 0; i <= 10; i++) {
        console.log(i * multiplier);
}

// Your top choices
var country = ["NZ", "PH", "AU"];

for (var i = 0; i < country.length; i++) {
    console.log('My #' + (i + 1) + ' choice ' + country[i])
}


