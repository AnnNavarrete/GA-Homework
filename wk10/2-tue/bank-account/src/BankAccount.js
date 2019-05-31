import React from "react";

// For this exercise you will be creating an BankAccount class.
// It will have the following properties...
// type (e.g., "checking"), which should be determined by some input
// balance, which should start out as 0

// It should have the following methods...
// getType, which should return the type of the bank account
// withdraw, which should decrease the amount of money by some input
// deposit, which should increase the amount of money by some input
// showBalance, which should return the amount of money in the bank.
// The BankAccount class has a transactionHistory which keeps track of the withdrawals and deposits made to the account.

// Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.
// Create an instance of the BankAccount class

// call a few methods to demostrate that it's working as expected

export default class BankAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ["checking", "savings"],
      balance: 0
    };
  }
  getType() {}
  withdraw() {}
  deposit() {}
  showBalance() {}
}
