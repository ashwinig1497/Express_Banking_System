class TreeNode {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(accountNumber, balance) {
        const newNode = new TreeNode(accountNumber, balance);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.accountNumber < node.accountNumber) {
            if (!node.left) node.left = newNode;
            else this._insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this._insertNode(node.right, newNode);
        }
    }

    search(accountNumber) {
        return this._searchNode(this.root, accountNumber);
    }

    _searchNode(node, accountNumber) {
        if (!node) return null;
        if (accountNumber === node.accountNumber) return node;
        if (accountNumber < node.accountNumber) return this._searchNode(node.left, accountNumber);
        else return this._searchNode(node.right, accountNumber);
    }
}

module.exports = BinarySearchTree;
