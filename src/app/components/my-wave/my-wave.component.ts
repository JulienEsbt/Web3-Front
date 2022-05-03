import { Component, OnInit } from '@angular/core';
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
  abi = environment.abi;
  last: any;


  constructor(
    private web3: Web3Service) {
  }

  ngOnInit(): void {
  }

  Connect() {
    this.web3.connectAccount(this.abi).then(response => {
      console.log(response);
      this.adress = response
      if (this.adress) {
        this.web3.accountInfo(this.adress[0]).then(response => {
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
      this.web3.getContract().events.NewWave(options).then( (event: any)=>{
        console.log(event)
      })


      // this.web3.getContract().

    })

  }

  Wave() {
    this.web3.sendWave().then(response => {
      console.log(response);
      this.last = response
    })
  }
}
