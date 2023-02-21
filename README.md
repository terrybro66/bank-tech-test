# Bank Tech Test

This is written in javascript and is run using Node REPL

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

# User Stories

As a user, I want to be able to create a new bank account.

As a user, I want to be able to credit my account.

As a user, I want to be able to debit my account.

As a user, I want to be able to see my current account balance.

As a user, I want to be able to see a statement of my account.

As a user, I want to be able to see a breakdown of my account activity by credit and debit.

As a user, I want to be able to see the date of each transaction in my bank statement.

# Classes, Methods and Variables

**Account class** stores in memory
the balance state,
the transaction array state,
has an add transaction method which adds a transaction to the array and a generateStatement method which prints a statement

**Transaction class** takes in as arguments date, amount and transaction array and returns an updated array

**Statement class** which takes in the transaction array and constructs a statement in the correct format using the map function and string interpolation

**Money class**
Takes in a number and returns a number to two decimal places. This functionality could be extended to convert currencies if required.

![Class design](./design.png?raw=true "Class Design")
