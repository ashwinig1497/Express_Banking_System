const Bank = require("./Bank");

const bank = new Bank();

// Create Accounts
bank.createAccount(1001, 5000);
bank.createAccount(1002, 3000);

// Check Balances
bank.checkBalance(1001);
bank.checkBalance(1002);

// Transfer
bank.transfer(1001, 1002, 1500);

// Check Balances Again
bank.checkBalance(1001);
bank.checkBalance(1002);
