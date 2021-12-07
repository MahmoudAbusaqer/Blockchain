const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

// Your private key goes here
const myKey = ec.keyFromPrivate(
    "6f523179af3628b5e51ba11e0d82fbf8ab61765c69701ae9c4643d4402b3b760"
); //you can my public and private key in KeyGenerator.js file

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic("hex");

// Create new instance of Blockchain class
const mahmoudCoin = new Blockchain();

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, "address2", 100);
tx1.signTransaction(myKey);
mahmoudCoin.addTransaction(tx1);

// Mine block
mahmoudCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(myWalletAddress, "address1", 50);
tx2.signTransaction(myKey);
mahmoudCoin.addTransaction(tx2);

// Mine block
mahmoudCoin.minePendingTransactions(myWalletAddress);

console.log(
    "\nBalance of mahmoud is",
    mahmoudCoin.getBalanceOfAddress(myWalletAddress)
);

// Uncomment this line if you want to test tampering with the chain
// mahmoudCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log();
console.log("Blockchain valid?", mahmoudCoin.isChainValid() ? "Yes" : "No");
