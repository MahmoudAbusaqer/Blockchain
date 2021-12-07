const EC = require("elliptic").ec;

// You can use any elliptic curve you want
const ec = new EC("secp256k1");

// Generate a new key pair and convert them to hex-strings
const key = ec.genKeyPair();
const publicKey = key.getPublic("hex");
const privateKey = key.getPrivate("hex");

// Print the keys to the console
console.log();
console.log(
    "Your public key (also your wallet address, freely shareable)\n",
    publicKey
);

console.log();
console.log(
    "Your private key (keep this secret! To sign transactions)\n",
    privateKey
);

/**
 * So here are my public and private key
Your public key (also your wallet address, freely shareable)
 04c17cb5955afa85b53f4c70a2d63f9a6e5d4888c1cd4d15f01fbb9ba77dcfa6dd3c66d251d6b73a119d6dae29537de51ac264ac722885a4b227008cc9251c887f

Your private key (keep this secret! To sign transactions)
 6f523179af3628b5e51ba11e0d82fbf8ab61765c69701ae9c4643d4402b3b760
 */
