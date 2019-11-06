import { Component, OnInit, Input } from '@angular/core';

import { Flight } from './flight-type';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {
  @Input() flight: Flight;

  constructor() { }

  ngOnInit() {
    console.log(this.flight)
    // this.flight = {
    //   logoUrl: highResAirlineLogoUrl
    // }
  }

}