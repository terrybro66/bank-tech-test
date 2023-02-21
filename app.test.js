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
    console.log(account.transactions);

    account.addTransaction();
    expect(account.transactions).toHaveLength(1);
  });
});
