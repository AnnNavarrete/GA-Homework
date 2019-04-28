/* Homework 5th of April 2019
JS: Keep track of the checking and savings balances somewhere ✅
JS & DOM: Add functionality so that a user can deposit money into one of the bank accounts.✅
DOM & HTML: Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.✅
JS & DOM: Add functionality so that a user can withdraw money from one of the bank accounts.
JS: Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists 
    in the account, ignore the transaction.✅
JS & CSS: When the balance of the bank account is $0 the background of that bank account should be red. It
    should be gray when there is money in the account✅
JS: What happens when the user wants to withdraw more money from the checking account than is in the account? 
    These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, 
    take the checking balance down to $0 and take the rest of the withdrawal from the savings account. 
    If the withdrawal amount is more than the combined account balance, ignore it.✅
JS: Make sure there is overdraft protection going both ways.✅
*/

// pseudocode
// breakdown the parts to each category
// what part is pure javascript
// what part relates to HTML
// what part relates to style/CSS
// what part can be manipulated via the DOM
// design close to wireframe

var checkingBalance = 0;
var savingsBalance = 0;

var totalBankBalance = function() {
  return checkingBalance + savingsBalance;
};

var checkingBalanceElement = document.getElementById("checkingBalance");
var savingsBalanceElement = document.getElementById("savingsBalance");

// Update DOM balance at the beginning of the page
var updateDOMbalance = function() {
  checkingBalanceElement.innerText = checkingBalance;
  savingsBalanceElement.innerText = savingsBalance;

  // To update the background color of checking account when zero balance reached
  if (checkingBalance === 0) {
    document
      .getElementById("checkAccount")
      .setAttribute("class", "zero-balance"); // setting class attributes to have zero balance
  } else {
    document.getElementById("checkAccount").removeAttribute("class"); // reverse the class added from top code
  }

  // To update the background color of savings account when zero balance reached
  if (savingsBalance === 0) {
    document
      .getElementById("savingsAccount")
      .setAttribute("class", "zero-balance");
  } else {
    document.getElementById("savingsAccount").removeAttribute("class");
  }
};

updateDOMbalance();

// Working on all deposit functions for both checking and savings

// Checking deposit account
var depositCheckAccount = function(deposit) {
  checkingBalance += parseFloat(deposit); //parseFloat converts the strings to a number including decimal
};

var handleCheckDeposit = function() {
  var checkAmountInput = document.getElementById("checkAmount");
  var amountToDeposit = parseFloat(checkAmountInput.value);
  checkAmountInput.value = "";
  depositCheckAccount(amountToDeposit);
  updateDOMbalance(); // Placing the DOM balance within the handles area to separate business logic from the UI changes
};

document
  .getElementById("checkingDeposit")
  .addEventListener("click", handleCheckDeposit);

// Savings deposit account
var depositSavingsAccount = function(deposit) {
  savingsBalance += parseFloat(deposit);
};

var handleSavingsDeposit = function() {
  var savingsAmountInput = document.getElementById("savingsAmount");
  var amountToDeposit = parseFloat(savingsAmountInput.value);
  savingsAmountInput.value = "";
  depositSavingsAccount(amountToDeposit);
  updateDOMbalance();
};

document
  .getElementById("savingsDeposit")
  .addEventListener("click", handleSavingsDeposit);

// Working on all withdrawal function for checking and deposit

// Checking withdraw account and withdraw money from savings if insufficient funds from check account

var checkWithdrawAccount = function(withdraw) {
  if (totalBankBalance() < withdraw) {
    alert("Insufficient funds");
  } else if (checkingBalance > withdraw) {
    checkingBalance -= withdraw;
  } else {
    // checking has $50 and savings has $70: Want to withdraw $60
    // withdraw first from checking down to zero balance, amount to still withdraw is $10
    // go to savings account and if sufficient fund, allow withdrawal of $10 and update balance
    withdraw -= checkingBalance;
    checkingBalance = 0;
    savingsBalance -= withdraw;
  }
};

var handleCheckWithdrawal = function() {
  var checkAmountInput = document.getElementById("checkAmount");
  var amountToWithdraw = parseFloat(checkAmountInput.value); // to ensure only numbers can be accepted
  checkWithdrawAccount(amountToWithdraw);
  checkAmountInput.value = "";
  updateDOMbalance();
};

document
  .getElementById("checkingWithdraw")
  .addEventListener("click", handleCheckWithdrawal);

// Savings withdraw account

var savingsWithdrawAccount = function(withdraw) {
  if (totalBankBalance() < withdraw) {
    alert("Insufficient funds");
  } else if (savingsBalance > withdraw) {
    savingsBalance -= withdraw;
  } else {
    withdraw -= savingsBalance;
    savingsBalance = 0;
    savingsBalance -= withdraw;
  }
};

var handleSavingsWithdrawal = function() {
  var savingsAmountInput = document.getElementById("savingsAmount");
  var amountToWithdraw = parseFloat(savingsAmountInput.value);
  savingsAmountInput.value = "";
  checkWithdrawAccount(amountToWithdraw);
  updateDOMbalance();
};

document
  .getElementById("savingsWithdraw")
  .addEventListener("click", handleSavingsWithdrawal);

// Note to self: TODO -- refactor this bad boy
