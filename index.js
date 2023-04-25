// require {Provider, Account, ec}  'starknet';

const {Provider, Account, Contract,ec} = require('starknet');

const provider = new Provider({sequencer: {network: "goerli-alpha"}});



const privateKey0 = '';
const account0Address = "0x0062bdefaaab462ffacc160306b28f3af840267478a0a7c1668178a53e560240";

const starkKeyPair0 = ec.getKeyPair(privateKey0);
const account0 = new Account(provider, account0Address, starkKeyPair0);

async function  test() {
    const nonce = await account0.getNonce();
    console.log(nonce);

    const txReceiptDeployTest = await provider.waitForTransaction('0x62bdefaaab462ffacc160306b28f3af840267478a0a7c1668178a53e560240');
    console.log("events =",txReceiptDeployTest.events);


//     const testAddress = "0x7667469b8e93faa642573078b6bf8c790d3a6184b2a1bb39c5c923a732862e1";
//     const compiledTest = json.parse(fs.readFileSync("./compiledContracts/test.json").toString("ascii"));
//
// // connect the contract
//     const myTestContract = new Contract(compiledTest.abi, testAddress, provider);
}




test();