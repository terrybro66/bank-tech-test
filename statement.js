class Statement {
  constructor(transactions) {
    this.transactions = transactions;
    this.header = "date || credit || debit || balance\n";
  }
  generateStatement() {
    let balance = 0;
    let output = this.header;
    this.transactions.map((transaction) => {
      if (transaction.amount > 0) {
        balance += transaction.amount;
        output += `${transaction.date} || ${transaction.amount} || || ${balance}\n`;
      } else {
        balance += transaction.amount;
        output += `${transaction.date} || || ${transaction.amount} || ${balance}\n`;
      }
      return output;
    });
    return output;
  }
}

module.exports = Statement;
