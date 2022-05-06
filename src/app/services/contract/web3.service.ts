import {Inject, Injectable} from '@angular/core';
import { WEB3 } from '../../core/web3';
import { Subject } from 'rxjs';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { provider } from 'web3-core';
import {Contract, ContractOptions} from 'web3-eth-contract';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  public accountsObservable = new Subject<string[]>();
  web3Modal;
  web3js:  any;
  provider: provider | undefined;
  accounts: string[] | undefined;
  balance: string | undefined;
  contract: Contract | undefined;
  message: string | undefined;
  /*wavesCleaned: [] | undefined;*/

  constructor(@Inject(WEB3) private web3: Web3) {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: '84d08e237e084e5994d0c9489d1dc8f0', // required change this with your own infura id
          description: 'Scan the qr code and sign in',
          qrcodeModalOptions: {
            mobileLinks: [
              'rainbow',
              'metamask',
              'argent',
              'trust',
              'imtoken',
              'pillar'
            ]
          }
        }
      },
      injected: {
        display: {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
          name: 'metamask',
          description: "Connect with the provider in your Browser"
        },
        package: null
      },
    };

    this.web3Modal = new Web3Modal({
      network: "rinkeby", // optional change this with the net you want to use like rinkeby etc
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }

  /*async getAllWaves (abi:any) {
    this.provider = await this.web3Modal.connect(); // set provider
    if (this.provider) {
      this.web3js = new Web3(this.provider);
    } // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts();

    // contractAddress and abi are setted after contract deploy
    var contractAddress = '0xed8A56B4b028F731f57daF888e9E66f117494098';
    this.contract = new this.web3js.eth.Contract(abi, contractAddress)

    // @ts-ignore
    const waves = await this.contract.getAllWaves();

    waves.forEach((wave: { waver: any; timestamp: number; message: any; }) => {
      // @ts-ignore
      this.wavesCleaned.push({
        // @ts-ignore
        address: wave.waver,
        // @ts-ignore
        timestamp: new Date(wave.timestamp * 1000),
        // @ts-ignore
        message: wave.message
      });
    });
  }
  */

  async connectAccount(abi:any) {
    this.provider = await this.web3Modal.connect(); // set provider
    if (this.provider) {
      this.web3js = new Web3(this.provider);
    } // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts();

    // contractAddress and abi are setted after contract deploy
    var contractAddress = '0xed8A56B4b028F731f57daF888e9E66f117494098';
    this.contract =new this.web3js.eth.Contract(abi, contractAddress)

    return this.accounts;
  }

  getContract() {
    return this.contract;
  }

  async accountBalance(adress :string){
    const initialvalue = await this.web3js.eth.getBalance(adress);
    this.balance = this.web3js.utils.fromWei(initialvalue , 'ether');
    return this.balance;
  }

  async sendWave(message :string): Promise<any>{
    try {
      if (this.provider) {
        // @ts-ignore
        return this.contract.methods.wave(message).send({from: this.accounts[0] });
      } else {
        console.log("Ethereum object doesn't exist!");
        return ""
      }
    } catch (error) {
      console.log(error);
      return ""
    }
  }

}

