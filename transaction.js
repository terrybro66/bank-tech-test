class Transaction {
  constructor(amount, date) {
    this.date = date;
    this.amount = amount;
  }
  formatDate(date) {
    if (date.length == 10) {
      return date;
    }
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return `${day}/${month}/${year}`;
  }

  makeObj() {
    return { date: this.formatDate(this.date), amount: this.amount };
  }
}

module.exports = Transaction;
