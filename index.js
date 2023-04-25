// require {Provider, Account, ec}  'starknet';

const {Provider, Account, ec} = require('starknet');

const provider = new Provider({sequencer: {network: "goerli-alpha"}});



const privateKey0 = '';
const account0Address = "0x0138aefDb281051E0cB93199bC88f133c2ba83cbD50fe6fc984B5588b087917c";

const starkKeyPair0 = ec.getKeyPair(privateKey0);
const account0 = new Account(provider, account0Address, starkKeyPair0);

async function  test() {
    const nonce = await account0.getNonce();
    console.log(nonce);

    const txReceiptDeployTest = await provider.waitForTransaction('0x62bdefaaab462ffacc160306b28f3af840267478a0a7c1668178a53e560240');
    console.log("events =",txReceiptDeployTest.events);

}




test();