import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MarketPlaceComponent} from "./components/market-place/market-place.component";
import {MyWaveComponent} from "./components/my-wave/my-wave.component";

const routes: Routes = [
  {
    path: 'wave',
    component: MyWaveComponent
  },
  {
    path: 'market',
    component: MarketPlaceComponent
  },
  {
    path: 'wave',
    component: MyWaveComponent
  },
  {
    path: '**',
    component: MyWaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
