import { Component, OnInit } from '@angular/core';
import {MarketPlaceService} from "../../services/market-place-contract/market-place.service";
import {environment} from "../../../environments/environment";

/*interface Parti {
  id: number;
  name: string;
}*/

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {
  adress: string[] | undefined;
  balance= ''
  contractAddress = '0xE72010C2381Ba55134e17E1DE8BA92A6d2915186';
  abi = environment.marketplaceabi;
  last: any;
  price: number | undefined;
  propose: number | undefined;
  panelOpenState = false;

  constructor(
    private web3: MarketPlaceService) {
  }

  /*partis: Parti[] = [
    {id: 0, name: 'Vendeur'},
    {id: 1, name: 'Acheteur'},
  ];*/

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
    })
  }

  makeAnOffer() {
    this.web3.makeOffer(this.price).then(response => {
      console.log(response);
      this.last = response
    })
  }

  rejectAnOffer() {
    this.web3.reject().then(response => {
      console.log(response);
      this.last = response
    })
  }

  acceptAnOffer() {
    this.web3.acceptOffer(this.propose).then(response => {
      console.log(response);
      this.last = response
    })
  }

}
