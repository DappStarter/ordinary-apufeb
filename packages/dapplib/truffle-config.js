require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain come install creek flat ghost'; 
let testAccounts = [
"0x7e5c1e71ba7d62880886373ab90a9fb252b57ab2eb51a3577719fb6abe561788",
"0x96a2ddec4ec803e3e15e589afa2758e0b4ddc8d20c4defd5c82089b1a4abbedc",
"0x184767a65155b72a1ec8c636b128657a392d0f44919940c6d1c0ed1f1a507ef7",
"0xc526e39d414e1a6446c329fcad7d462ea5c39a7d3377cc6912e9ba686adeb3ba",
"0x45d4b8bd0e8248ae48ce530484c569575586e7aa5d28751bd17de43c257e0fc5",
"0x1d87c88614c4bc5ff888ad99ea17dcbe208a261148dd96474dd9a6900fb0a2a8",
"0xe29551333836024ca2e9ed1c282343ee0a9b003f66cab8c55b3f81ae84d9a8b7",
"0xf8979ee8dc8ed4c464b7df36e0982c76ba86fd2377fdcec782a6daa7d2eafb7c",
"0xb869c1a8e8edb9b6e11a81199933f7059030c7ee13c86e96ce163f671632f11e",
"0xc21f4c693ebf570c2bb16e61a7a1eba53add53eecaced0924fe1c842a46daf5b"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
