import { Block } from "./block";
import { Transaction } from "./transaction";

export class Blockchain {
    public chain: Block[] = [];
    public pendingTransactions: Transaction[] = [];
    public miningReward: number = Number(process.env.MINING_REWARD) || 100; 
    public difficulty: number = Number(process.env.DIFFICULTY) || 2; 

    constructor() {
        this.createGenesisBlock();
    }

    createGenesisBlock(): void {
        const genesisBlock = new Block("0", []);
        this.chain.push(genesisBlock);
    }

    getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    createTransaction(transaction: Transaction): void {
        if (transaction.amount <= 0) {
            throw new Error("Transaction amount must be greater than zero.");
        }
    
        if (!transaction.fromAddress || !transaction.toAddress) {
            throw new Error("Transaction must have valid addresses.");
        }
    
        this.pendingTransactions.push(transaction);
    }

    minePendingTransactions(minerAddress: string): void {
        const block = new Block(this.getLatestBlock().hash, this.pendingTransactions);
        block.mineBlock(this.difficulty);
        this.chain.push(block);
        console.log(`Mining reward of ${this.miningReward} to ${minerAddress}`);
        
        /**  Reward the miner */
        this.pendingTransactions = [new Transaction('', minerAddress, this.miningReward)];
    }

    getBalance(address: string): number {
        let balance = 0;
        for (const block of this.chain) {
            for (const tx of block.transactions) {
                if (tx.fromAddress === address) {
                    balance -= tx.amount;
                }
                if (tx.toAddress === address) {
                    balance += tx.amount;
                }
            }
        }
        return balance;
    }

    isChainValid(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}