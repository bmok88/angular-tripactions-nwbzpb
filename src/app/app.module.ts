import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FlightCardsModule } from './flight-cards/flight-cards.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, FlightCardsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
