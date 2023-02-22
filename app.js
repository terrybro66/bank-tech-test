const Transaction = require("./transaction.js");
const Statement = require("./statement.js");

class Account {
  constructor(balance, transactions) {
    this.balance = 0;
    this.transactions = [];
  }
  addTransaction(amount, date = new Date()) {
    this.balance += amount;
    const transaction = new Transaction(amount, date);
    const transactionObj = transaction.makeObj();
    this.transactions.push(transactionObj);
  }
  printStatement() {
    const statement = new Statement(this.transactions);
    const printOut = statement.generateStatement();
    return printOut;
    console.log(printOut);
  }
}

module.exports = Account;
