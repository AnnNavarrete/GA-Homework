import { checkPassword } from "./checkPassword";

test("empty password should result in no score", () => {
  expect(checkPassword("")).toEqual({
    score: 0,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  });
});

test("cakePudd1ng should return score 4", () => {
  expect(checkPassword("cakePudd1ng")).toEqual({
    score: 4,
    hasLowerCase: true,
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: false,
    isOver8Char: true,
    isOver12Char: false
  });
});

test("testing password should return score max", () => {
  expect(checkPassword("Testing@12345")).toEqual({
    score: 6,
    hasLowerCase: true,
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: true,
    isOver12Char: true
  });
});

// test("complex password should give max score", () => {
//   expect(checkPassword("cakePudd!ng12")).toEqual({
//     score: 6,
//     hasLowerCase: true,
//     hasUpperCase: true,
//     hasNumber: true,
//     hasNonAlphaNumeric: true,
//     isOver8Char: true,
//     isOver12Char: true
//   });
// });
