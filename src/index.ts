import { Blockchain } from './blockchain';
import { Transaction } from './transaction';

const cryptochain = new Blockchain();

cryptochain.createTransaction(new Transaction('genesis', 'miner1', 100));
cryptochain.minePendingTransactions('miner1'); 


cryptochain.createTransaction(new Transaction('miner1', 'address2', 50));
cryptochain.createTransaction(new Transaction('miner1', 'address3', 30)); 

console.log('Starting the miner...');
cryptochain.minePendingTransactions('miner1'); 

console.log(`Balance of miner1 is ${cryptochain.getBalance('miner1')}`);
console.log(`Balance of address2 is ${cryptochain.getBalance('address2')}`);
console.log(`Balance of address3 is ${cryptochain.getBalance('address3')}`);
console.log(`Is blockchain valid? ${cryptochain.isChainValid()}`);
