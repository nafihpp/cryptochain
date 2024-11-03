# CryptoChain

A blockchain implementation in TypeScript that mimics basic functionality similar to Bitcoin. This project serves as a demonstration of blockchain concepts.

## Concepts Explained

- **block** is a container for storing data. In the context of a blockchain, a block contains a list of transactions. Each block has:
- **Transactions**: Records of value transfers between users (e.g., sending cryptocurrency from one address to another).
- **Hash**: A unique identifier created from the contents of the block, ensuring that the block cannot be altered without changing its hash.
- **Previous Hash**: The hash of the previous block in the chain, which links blocks together.
- **Timestamp**: The time when the block was created.

- **nonce** (short for "number used once") is a number that miners use to solve complex mathematical problems during the mining process. When a block is mined, the miner must find a nonce that, when combined with the block's data and hashed, produces a hash that meets a certain difficulty level (e.g., starts with a specific number of zeros). The nonce is essential for ensuring the security of the blockchain and preventing unauthorized changes.


## Features

- Transaction management
- Block creation with proof of work (mining)
- Balance checking
- Mining rewards
- Validation of blockchain integrity

## Getting Started

### Prerequisites

- Node.js
- TypeScript

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nafihpp/cryptochain.git
