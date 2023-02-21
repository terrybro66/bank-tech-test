class Transaction {
  constructor(amount) {
    this.transactionDate = new Date();
    this.amount = amount;
  }
}

module.exports = Transaction;
