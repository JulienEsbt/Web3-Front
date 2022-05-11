import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyWaveComponent } from './components/my-wave/my-wave.component';
import { MarketPlaceComponent } from './components/market-place/market-place.component';
import {AppRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./shared/material.module";
import { NavigationComponent } from './components/navigation/navigation.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    MyWaveComponent,
    MarketPlaceComponent,
    NavigationComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
