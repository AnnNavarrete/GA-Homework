const checkPassword = password => {
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasNonAlphaNumeric = /[^A-Za-z0-9]/.test(password);
  const isOver8Char = password.length > 8;
  const isOver12Char = password.length > 12;
  let score = 0;

  if (isOver8Char) {
    score++;
  }

  if (isOver12Char) {
    score++;
  }

  // increment the score for each of these conditions
  if (hasLowerCase) score++;
  if (hasUpperCase) score++;
  if (hasNumber) score++;
  if (hasNonAlphaNumeric) score++;

  return {
    score,
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasNonAlphaNumeric,
    isOver8Char,
    isOver12Char
  };
};

module.exports = {
  checkPassword: checkPassword
};
