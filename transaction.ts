import * as crypto from 'crypto';

export class Transaction {
    constructor(
        public fromAddress: string,
        public toAddress: string,
        public amount: number
    ) {}

    calculateHash(): string {
        return crypto.createHash('sha256').update(this.fromAddress + this.toAddress + this.amount).digest('hex');
    }
}