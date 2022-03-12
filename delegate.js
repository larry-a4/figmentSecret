const {
    CosmWasmClient, Secp256k1Pen, pubkeyToAddress, encodeSecp256k1Pubkey, makeSignBytes,
} = require('secretjs')

require('dotenv').config();

const main = async () => {
    // init client from env
    const mnemonic = process.env.MNEMONIC;
    const signingPen = await Secp256k1Pen.fromMnemonic(mnemonic)
      .catch((err) => {throw new Error(`Could not get signing pen: ${err}`); });
    const pubkey = encodeSecp256k1Pubkey(signingPen.pubkey);
    const accAddress = pubkeyToAddress(pubkey, 'secret');
    const client = new CosmWasmClient(process.env.SECRET_REST_URL);

    // Define validator address to delegate
    const valAddress = '<VALIDATOR ADDRESS>';

    // Optional memo
    const memo = 'My first secret delegation';

    // 1. Define TX message

    // 2. Define fees

    // 3. Sign TX

    // 4. Broadcast TX

    // 6. Query TX by hash
}

main().catch((err) => {
  console.error(err);
});