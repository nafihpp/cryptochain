import * as crypto from 'crypto';
import { Transaction } from "./transaction";

export class Block {
    public timestamp: number;
    public previousHash: string;
    public hash: string;
    public transactions: Transaction[];
    public nonce: number = 0; 

    constructor(previousHash: string, transactions: Transaction[]) {
        this.previousHash = previousHash;
        this.transactions = transactions;
        this.timestamp = Date.now();
        this.hash = this.calculateHash();
    }

    calculateHash(): string {
        const blockData = this.previousHash + this.timestamp + this.nonce + JSON.stringify(this.transactions);
        return crypto.createHash('sha256').update(blockData).digest('hex');
    }

    mineBlock(difficulty: number): void {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log(`Block mined: ${this.hash}`);
    }
}