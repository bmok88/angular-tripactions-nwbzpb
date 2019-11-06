export interface Flight {
  logoUrl: string;
  airline: string;
  departure: string;
  departureAirportCode: string;
  arrival: string;
  arrivalAirportCode: string;
  numberOfStops: number;
  duration: number;
  price: string;
}