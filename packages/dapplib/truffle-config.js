require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note toss color grace help equal gift'; 
let testAccounts = [
"0x68c66e032f392202799495a855bcd9de126c3514a148ee1662f6e9f4239dc031",
"0x648d13f4ac1661670ea9ffcc7dfe40572a00b060be844255784da1eaca72a448",
"0x20dfc12762b21d6e1ea205cfd8a9bb787dba6901049626dd2881b74be76921d5",
"0xfc460ad119d44f5cc06a30ca9a3259ed5ab02233d52d16871dcf54d9d7acd6a4",
"0x9d8044f8e4ca39d71da64f9cb35452de359786368626c871033cf55a2889b68e",
"0x6f7f0ee61534875d5ea936a009b8c89787f6dff855238033b986aa3b2262a24c",
"0x64f521834f128667707a646fcd8a3de76f6cc3c2b569f6b72388b8f1fc592ac3",
"0x3de91e96b79467f0e53c470fe3f8ada84b7148c96973e4d9768cdfdd2507dbd9",
"0x5a5cc1f861ef6209d67155518eab55796a9beaed2fd9e3729a170758a605402e",
"0x562db86891693bda31769bf02f96e57c1f11f0b320095619c573abfa3f1cd5cb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

