// todo: create and export the wallets from .env
import * as dotenv from 'dotenv';
import { Wallet } from 'xrpl';
dotenv.config();

const Wallet_1_seed = process.env.WALLET_1_SEED ?? '';
const Wallet_2_seed = process.env.WALLET_2_SEED ?? '';

export const wallet1 = Wallet.fromSeed(Wallet_1_seed);
export const wallet2 = Wallet.fromSeed(Wallet_2_seed);
