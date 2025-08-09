const LinkedList = require("./Linkedlist");
const BinarySearchTree = require("./Tree");

class Bank {
    constructor() {
        this.accountsList = new LinkedList();
        this.accountsTree = new BinarySearchTree();
    }

    createAccount(accountNumber, initialBalance) {
        this.accountsList.add(accountNumber, initialBalance);
        this.accountsTree.insert(accountNumber, initialBalance);
        console.log(`✅ Account ${accountNumber} created with balance ₹${initialBalance}`);
    }

    checkBalance(accountNumber) {
        let account = this.accountsTree.search(accountNumber);
        if (account) {
            console.log(`Balance for Account ${accountNumber}: ₹${account.balance}`);
            return account.balance;
        } else {
            console.log(`❌ Account ${accountNumber} not found`);
            return null;
        }
    }

    transfer(fromAcc, toAcc, amount) {
        let fromAccount = this.accountsTree.search(fromAcc);
        let toAccount = this.accountsTree.search(toAcc);

        if (!fromAccount || !toAccount) {
            console.log("❌ One of the accounts does not exist.");
            return;
        }

        if (fromAccount.balance < amount) {
            console.log("❌ Insufficient balance.");
            return;
        }

        fromAccount.balance -= amount;
        toAccount.balance += amount;

        this.accountsList.update(fromAcc, fromAccount.balance);
        this.accountsList.update(toAcc, toAccount.balance);

        console.log(`✅ ₹${amount} transferred from ${fromAcc} to ${toAcc}`);
    }
}

module.exports = Bank;
