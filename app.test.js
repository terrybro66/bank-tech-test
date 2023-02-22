const Account = require("./app.js");

describe("Account", () => {
  let account;

  beforeEach(() => {
    account = new Account(0, []);
  });
  test("should initialise with 0 balance", () => {
    expect(account.balance).toBe(0);
  });
  test("should initialise with empty array", () => {
    expect(account.transactions).toEqual([]);
  });
  test("should be able to add a transaction", () => {
    account.addTransaction();
    expect(account.transactions).toHaveLength(1);
  });
  test("should be able to print a statement", () => {
    account.addTransaction(22, "13/11/2009");
    account.addTransaction(-13);

    const statement = account.printStatement();
    const expectedStatement =
      "date || credit || debit || balance\n13/11/2009 || 22 || || 22\n22/02/2023 || || -13 || 9\n";
    expect(statement).toBe(expectedStatement);
  });
});
