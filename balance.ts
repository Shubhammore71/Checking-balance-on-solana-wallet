const { Connection, LAMPORTS_PER_SOL, PublicKey } = require("@solana/web3.js");

async function checkBalance(suppliedPublicKey) {
  if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
  }
  try {
    const connection = new Connection("https://api.mainNet.solana.com", "confirmed");
    const publicKey = new PublicKey(suppliedPublicKey);
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
    console.log(
      `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`
    );
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// Extract the public key from command line arguments
const suppliedPublicKey = process.argv[2];

// Call the function with the supplied public key
checkBalance(suppliedPublicKey).catch(err => console.error(err));

// Example famous Solana wallets
// checkBalance("toly.sol").catch(err => console.error(err));
// checkBalance("shaq.sol").catch(err => console.error(err));
// checkBalance("mccann.sol").catch(err => console.error(err));
