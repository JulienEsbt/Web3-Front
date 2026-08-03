# Angular Web3 Contract Explorer

> **Status: Historical learning project (2022)** — built to learn Angular and
> wallet integration. The original testnet deployments are no longer active.

This Angular application brings together three early smart-contract exercises
behind one interface. It demonstrates wallet connection, account information
and contract-specific actions for message storage, a wave portal and a simple
marketplace.

## Included experiments

- **Hello World:** read and update a message stored by a Solidity contract;
- **Wave Portal:** connect a wallet, send a message and read wallet information;
- **Simple Marketplace:** make, reject and accept offers through a contract
  state machine.

## Stack

- Angular 13 and TypeScript
- Angular Material
- Web3.js and ethers.js
- Web3Modal and WalletConnect
- Karma and Jasmine test scaffolding

## Related contracts

- [Hello-World-Smart-Contract](https://github.com/JulienEsbt/Hello-World-Smart-Contract)
- [My-Wave-Portal-Smart-Contract](https://github.com/JulienEsbt/My-Wave-Portal-Smart-Contract)
- [Market-Place-Smart-Contract](https://github.com/JulienEsbt/Market-Place-Smart-Contract)

## Run the interface locally

```bash
git clone https://github.com/JulienEsbt/Web3-Front.git
cd Web3-Front
npm install
npm start
```

The Angular interface opens at `http://localhost:4200`. To restore blockchain
interactions, deploy compatible contracts to a currently supported network and
replace the old provider and contract configuration.

## Historical limitations

- Ropsten and Rinkeby, the configured networks, have been retired;
- provider configuration is intentionally empty and must be supplied before use;
- contract addresses and generated ABIs are tied to old deployments;
- most tests are Angular-generated component or service creation checks;
- the dependencies reflect the 2022 ecosystem and are not actively maintained;
- the associated contracts are learning exercises and have not been audited.

This repository is preserved as an example of an early Angular/Web3 integration,
not as a live dApp or production-ready architecture.

## License

No open-source license has been selected for this learning repository.
