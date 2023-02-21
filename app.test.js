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
});
