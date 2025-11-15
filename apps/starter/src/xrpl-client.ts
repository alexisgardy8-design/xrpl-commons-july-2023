// todo: write the client
import { Client } from 'xrpl';
let client: Client;


const networks = {
    testnet: 'wss://s.altnet.rippletest.net:51233',
};
export const getClient = () => {
    if (!client) {
        client = new Client(networks.testnet);
    }
    return client;
};
