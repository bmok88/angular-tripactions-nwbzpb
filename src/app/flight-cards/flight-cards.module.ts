import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightCardsComponent } from './flight-cards.component';
import { FlightCardComponent } from './flight-card/flight-card.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlightCardsComponent, FlightCardComponent],
  exports: [
    FlightCardsComponent, FlightCardComponent
  ]
})
export class FlightCardsModule { }