// fancier line of code
// write an advance version of loc.js command line application to count lines of code within a file.

// example usage:

// $ node loc.js test1.js
// total lines: 5
// code lines: 2
// comment lines: 2
// blank lines: 1
// example usage:

// test1.js file:
// console.log("test");

// // this is a test
// // testing again
// console.log("hello");

// $ node loc.js test2.js
// total lines: 3
// code lines: 1
// comment lines: 2
// blank lines: 0

// test2.js file
// // 123
// // testing again
// console.log("hey");

//pseudocode
// read the file
// count number of lines inside file
// perform logic to count
// total lines i.e. split_lines.length - 1 => direct to `let totalLines`
// code lines i.e. doesn't begin with // => direct to `let codeLine`
// comment lines i.e. line begins with // => direct to `let commentLines`
// blank lines i.e. no characters => direct to `blankLines`
// due to reformatting, an additional blank line is being added to the end of the textfile

const fs = require("fs");
const lineReader = require("line-reader");

fs.readFile(`${process.argv[2]}`, function(err, data) {
  if (err) {
    throw err;
  } else {
    // fileBuffer = fs.readFileSync(`${process.argv[2]}`);
    const toString = data.toString();
    const lines = toString.split("\n");
    let totalLines = lines.length;
    let commentLines = 0;
    let blankLines = 0;
    let codeLines = 0;
    lines.forEach(function(line) {
      console.log(line);
      if (line.includes("//")) {
        commentLines++;
      } else if (line.trim() === "") {
        blankLines++;
      } else {
        codeLines++;
      }
    });
    console.log({ totalLines, commentLines, blankLines, codeLines });
  }
});
