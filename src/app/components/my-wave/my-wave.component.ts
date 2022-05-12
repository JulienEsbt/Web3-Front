import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Web3Service} from "../../services/contract/web3.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-my-wave',
  templateUrl: './my-wave.component.html',
  styleUrls: ['./my-wave.component.css']
})

export class MyWaveComponent implements OnInit {
  authenticated: boolean = false;
  adress: string[] | undefined;
  balance= ''
  contractAddress = '0xed8A56B4b028F731f57daF888e9E66f117494098';
  abi = environment.mywaveabi;
  last: any;
  message: string = '';
  panelOpenState = false;
  /*wave = '0xed8A56B4b028F731f57daF888e9E66f117494098'
  waver=''
  all: { waver: any; message: any; timestamp: Date; } | undefined*/


  constructor(
    private web3: Web3Service) {
  }

  ngOnInit(): void {
    this.Connect();
  }

  Connect() {
    this.web3.connectAccount(this.abi, this.contractAddress).then(response => {
      console.log(response);
      this.adress = response
      if (this.adress) {
        this.web3.accountBalance(this.adress[0]).then(response => {
          // @ts-ignore
          this.balance = response
        })
      }
      let options = {
        filter: {
          value: [],
        },
        fromBlock: 0
      };
      // @ts-ignore
      this.web3.getContract().events.NewWave(options).then( (event: any)=>{
        console.log(event)
      })
      // this.web3.getContract().
    })
  }

  Wave() {
    this.web3.sendWave(this.message).then(response => {
      console.log(response);
      this.last = response
    })
  }

  /*getAllWaves() {
    this.web3.getAllWaves(this.abi).then(response => {
      console.log(response);
      this.last = response

      const onNewWave = (waver : any , timestamp : number , message : any) => {
        console.log("NewWave", waver, timestamp, message);
        this.all = {
          // @ts-ignore
            waver: waver,
            timestamp: new Date(timestamp * 1000),
            message: message,
          }
      };
    })
  }*/
}
