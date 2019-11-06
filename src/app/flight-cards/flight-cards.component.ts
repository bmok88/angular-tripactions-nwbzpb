import { Component, OnInit } from '@angular/core';

import { Flight } from './flight-card/flight-type';
import * as flightData from '../flightsData';

import Moment from 'moment';
import { extendMoment } from 'moment-range';

// Siete delle merde
const moment = extendMoment(Moment);

@Component({
  selector: 'app-flight-cards',
  templateUrl: './flight-cards.component.html',
  styleUrls: ['./flight-cards.component.scss']
})
export class FlightCardsComponent implements OnInit {
  flights: Flight[];
    constructor() {
  }

  ngOnInit() {
    this.flights = flightData.FLIGHTS_JSON.map(option => {
      const flightSegments = option.flight.flightSegments;
      const numFlightSegments = flightSegments.length;

  const departureDateObj = moment(new Date(flightSegments[0].departureDateAndTime)).format("YYYY-MM-DD HH:mm:ss");
  const departureDateTimeArr = departureDateObj.split(' ');
  const departureDate = departureDateTimeArr[0];
  const departureTime = departureDateTimeArr[1];
  const parsedDepartureDate = moment(departureDate).format('MMM DD');
  const parsedDepartureTime = moment(departureTime, 'HH:mm').format('hh:mm a');

    const arrivalDateObj = moment(new Date(flightSegments[0].arrivalDateAndTime)).format("YYYY-MM-DD HH:mm:ss");
  const arrivalDateTimeArr = arrivalDateObj.split(' ');
  const arrivalDate = arrivalDateTimeArr[0];
  const arrivalTime = arrivalDateTimeArr[1];
  const parsedArrivalDate = moment(arrivalDate).format('MMM DD');
  const parsedArrivalTime = moment(arrivalTime, 'HH:mm').format('hh:mm a');
  // console.log(moment(dateTime).format("YYYY-MM-DD HH:mm:ss"))

      return {
        logoUrl: flightSegments[0]['highResAirlineLogoUrl'],
        airline: flightSegments[0].airlineName,
        departure: parsedDepartureDate + ' ' + parsedDepartureTime,
        departureAirportCode: flightSegments[0].departureAirportCode,
        arrival: parsedArrivalDate + ' ' + parsedArrivalTime,
        arrivalAirportCode: flightSegments[numFlightSegments - 1].arrivalAirportCode,
        numberOfStops: numFlightSegments,
        duration: this.convertMinutesToHours(option.flight.durationMinutes),
        price: option.priceInfo.totalPrice
      }
    });
  }

  convertMinutesToHours(totalMinutes: number) {
    const num = totalMinutes;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    
    return rhours + "h " + rminutes + "m";
  }
}