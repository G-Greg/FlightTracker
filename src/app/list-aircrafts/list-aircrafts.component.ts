import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plane } from '../models/plane.model';
import { PLANE } from '../plane/plane.storage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { CardComponent } from '../card/card.component';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-aircrafts',
  templateUrl: './list-aircrafts.component.html',
  styleUrls: ['./list-aircrafts.component.scss']
})
export class ListAircraftsComponent implements OnInit {
  faTags = faTags;
  faPlaneDeparture = faPlaneDeparture;
  faPlaneArrival = faPlaneArrival;
  faEarthAmericas = faEarthAmericas;
  faCalendarDay = faCalendarDay;

  planes: Plane[] = [];
  isCardView = false;


  constructor(private router: Router, private modalService: NgbModal) {  }

  onSelect(plane: Plane) {
    this.router.navigate(['/aircraft/edit/', plane.id]);
  }

  showCard(plane: Plane) {
    let modal = this.modalService.open(CardComponent, {
      backdrop: 'static',
      centered: true
    });

    (modal.componentInstance as CardComponent).initCard({plane},{
      close: () => modal.close()
    });
  }

  delete(plane: Plane) {
    let modal = this.modalService.open(DeleteModalComponent, {
      backdrop: 'static',
      centered: true
    });

    (modal.componentInstance as DeleteModalComponent).initDelete({
      close: () => modal.close(),
      del: () => {
        const index = PLANE.indexOf(plane, 0);
        if (index > -1) {
          PLANE.splice(index, 1);
        }
        modal.close()
      }
    });

  }

  ngOnInit(): void {
    this.planes = PLANE
  }

}
