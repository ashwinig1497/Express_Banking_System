class Node {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(accountNumber, balance) {
        const newNode = new Node(accountNumber, balance);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    find(accountNumber) {
        let current = this.head;
        while (current) {
            if (current.accountNumber === accountNumber) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    update(accountNumber, newBalance) {
        let account = this.find(accountNumber);
        if (account) {
            account.balance = newBalance;
            return true;
        }
        return false;
    }
}

module.exports = LinkedList;
