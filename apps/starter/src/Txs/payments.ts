import { TxnOptions } from "src/models";
import { getClient } from "../xrpl-client";
import {Payment} from 'xrpl';
const client = getClient();
type PaymentProps = Omit<Payment, 'TransactionType' | "Account"> 
export const sendPayment = (props:PaymentProps, {wallet}: TxnOptions) => {
};
