import { Component, OnInit } from '@angular/core';
import {Web3Service} from "../../services/contract/web3.service";

@Component({
  selector: 'app-my-wave',
  templateUrl: './my-wave.component.html',
  styleUrls: ['./my-wave.component.css']
})
export class MyWaveComponent implements OnInit {
  authenticated: boolean = false;
  data: string[] | undefined;

  constructor(
    private web3: Web3Service) {
  }

  ngOnInit(): void {
  }

  Connect() {
    this.web3.connectAccount().then(response => {
      console.log(response);
      this.data = response
    })
  }

}
