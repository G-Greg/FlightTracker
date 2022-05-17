import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plane } from './models/plane.model';
import { PLANE } from './plane/plane.storage';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightTracker';

  planes: Plane[] = [];
  faPlaneUp = faPlaneUp;


  constructor(private router: Router) {
    this.initFlightTracker();
  }

  onSelect(plane: Plane){
      this.router.navigate(['/aircraft/edit/', plane.id]);
  }

  initFlightTracker(){
    this.planes = PLANE
    //this.router.navigate(['/aircraft/new']);
  }
}