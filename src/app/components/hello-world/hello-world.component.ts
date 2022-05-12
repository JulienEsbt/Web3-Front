import { Component, OnInit } from '@angular/core';
import {HelloWorldService} from "../../services/hello-world-contract/hello-world.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent implements OnInit {
  adress: string[] | undefined;
  balance= ''
  contractAddress = '0xD1A36e0d2f7AC156593E6a243918C722e7b81B8c';
  abi = environment.helloworldabi;
  last: any;
  message: string = '';
  panelOpenState = false;

  constructor(
    private web3: HelloWorldService) {
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
  envoie() {
    this.web3.update(this.message).then(response => {
      console.log(response);
      this.last = response
    })
  }


}
