import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plane } from '../models/plane.model';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Output()
  close = new EventEmitter<void>();

  @Output()
  del = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  initDelete(outputs:{ close: (...args: any[]) => any , del: (...args: any[]) => any } ){

    this.close.subscribe(outputs["close"]);
    this.del.subscribe(outputs["del"]);
  }
}
