import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plane } from '../models/plane.model';
import { PLANE } from './plane.storage';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response.model';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.scss']
})
export class PlaneComponent implements OnInit {

  plane?: Plane;

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

  disabled = false;
  
  selectedPlane = 0;
  dataSize = 0;
  response!: Response;
  
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) { }
  
  getApi(){
    let baseURL = 'http://api.aviationstack.com/v1/flights?access_key=';
    let apikey = '';
    let searchURL = '&airline_name='+this.search.split(' ').join('%20');//+'&limit=1'
    console.log(baseURL+apikey+searchURL)
    this.http.get<Response>(baseURL+apikey+searchURL).subscribe((response: Response) => {
      console.log(response);
      
      if(response.data[this.selectedPlane].airline.name != null &&
        response.data[this.selectedPlane].departure.airport != null &&
        response.data[this.selectedPlane].arrival.airport != null &&
        response.data[this.selectedPlane].flight_status != null &&
        response.data[this.selectedPlane].flight_date != null)
        {
          this.response = response;
          this.dataSize = response.data.length-1
          this.search = response.data[this.selectedPlane].airline.name
          this.departure = response.data[this.selectedPlane].departure.airport
          this.arrival = response.data[this.selectedPlane].arrival.airport
          this.flightStatus = response.data[this.selectedPlane].flight_status
          this.flightDate = response.data[this.selectedPlane].flight_date
        }
      });
    }
    
  change(){
    console.log(this.search, this.selectedPlane)
    this.search = this.response.data[this.selectedPlane].airline.name
    this.departure = this.response.data[this.selectedPlane].departure.airport
    this.arrival = this.response.data[this.selectedPlane].arrival.airport
    this.flightStatus = this.response.data[this.selectedPlane].flight_status
    this.flightDate = this.response.data[this.selectedPlane].flight_date
  }
    
  getPlaneByActualId(): Plane{
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    let plane = PLANE.filter(p => p.id === id)[0];
    return plane;
  }

  checkExistingId(): boolean{
    let plane = this.getPlaneByActualId();
    if(plane){
      return true;
    }
    return false;
  }

  createNewPlane(){
    if(this.search.length > 0 && this.departure.length > 0 && this.arrival.length > 0 && this.flightDate.length > 0 && this.flightStatus.length > 0){
      const newPlane: Plane = {
        id: PLANE.length + 1,
        name: this.search,
        departure: this.departure,
        arrival: this.arrival,
        flight_date: this.flightDate,
        flight_status: this.flightStatus
      }
      PLANE.push(newPlane);
      console.log(PLANE);
      this.router.navigate(['/aircrafts']);
    }
  }

  updatePlane(){
    if(this.search.length > 0 && this.departure.length > 0 && this.arrival.length > 0 && this.flightDate.length > 0 && this.flightStatus.length > 0){
      this.plane!.name = this.search
      this.plane!.departure = this.departure
      this.plane!.arrival = this.arrival
      this.plane!.flight_date = this.flightDate
      this.plane!.flight_status = this.flightStatus
      console.log(PLANE);
      this.router.navigate(['/aircrafts']);
    }
  }


  save(){
    if(this.plane){
      this.updatePlane()
    }
    else{
      this.createNewPlane()
    }
  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    if (id){
      this.plane = PLANE.filter(p => p.id === id)[0]
      this.search = this.plane.name
      this.departure = this.plane.departure
      this.arrival = this.plane.arrival
      this.flightDate = this.plane.flight_date
      this.flightStatus = this.plane.flight_status
      
      this.disabled = true;
    }
  }
}
