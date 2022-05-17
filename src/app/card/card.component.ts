import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plane } from '../models/plane.model';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output()
  close = new EventEmitter<void>();

  faTags = faTags;
  faPlaneDeparture = faPlaneDeparture;
  faPlaneArrival = faPlaneArrival;
  faEarthAmericas = faEarthAmericas;
  faCalendarDay = faCalendarDay;

  search = '';
  departure = '';
  arrival = '';
  flightDate = '';
  flightStatus = '';

  constructor() { }

  ngOnInit(): void {
  }

  initCard(inputs:{plane: Plane},outputs:{ close: (...args: any[]) => any} ){
    this.search = inputs.plane.name,
    this.departure = inputs.plane.departure,
    this.arrival = inputs.plane.arrival,
    this.flightDate = inputs.plane.flight_date,
    this.flightStatus = inputs.plane.flight_status,
    this.close.subscribe(outputs["close"]);
  }

}
