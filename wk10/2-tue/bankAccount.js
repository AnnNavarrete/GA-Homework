// For this exercise you will be creating an BankAccount class.

// It will have the following properties...

// type (e.g., "checking"), which should be determined by some input
// balance, which should start out as 0
// It should have the following methods...

// getType, which should return the type of the bank account
// withdraw, which should decrease the amount of money by some input
// deposit, which should increase the amount of money by some input
// showBalance, which should return the amount of money in the bank.
// The BankAccount class has a transactionHistory which keeps track of the withdrawals and deposits
// made to the account.

// Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.
// Create an instance of the BankAccount class

// call a few methods to demostrate that it's working as expected

class BankAccount {
  constructor(type) {
    this.type = type;
    this.balance = 0;
    this.transactionHistory = [];
  }

  chargeFee() {
    this.balance -= this.fee
  }

  showHistory() {
    this.showHistory.forEach((entry)
    )
  }

  getType() {
    return this.type;
  }
  withdraw(withdrawAmount) {
    this.balance -= withdrawAmount;
    this.transactionHistory.push(-withdrawAmount);
  }

  deposit(depositAmount) {
    this.balance += depositAmount;
    this.transactionHistory.push(depositAmount);
  }
  showBalance() {
    return this.balance;
  }
}

// default binding - call function by itself (global or window)
// implicit binding a2.deposit()
// explicit binding - a2.deposit.call(context)
// hard binding - a2.deposit.bind(context) => new (returns a new function you can call later)
// constructor function binding

var account = {
  balance: 0,
  deposit: function() {
    console.log(this.balance);
  }
};
account.deposit();

setTimeout(account.deposit.bind(account), 2000);
