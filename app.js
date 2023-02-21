const Transaction = require("./transaction.js");

class Account {
  constructor(balance, transactions) {
    this.balance = 0;
    this.transactions = [];
  }
  addTransaction(amount) {
    this.balance += amount;
    const transaction = new Transaction(amount);
    this.transactions.push(transaction);
  }
}

module.exports = Account;
