import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MarketPlaceComponent} from "./components/market-place/market-place.component";
import {MyWaveComponent} from "./components/my-wave/my-wave.component";
import {HelloWorldComponent} from "./components/hello-world/hello-world.component";
import {NavigationComponent} from "./components/navigation/navigation.component";

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
    path: 'hello',
    component: HelloWorldComponent
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
