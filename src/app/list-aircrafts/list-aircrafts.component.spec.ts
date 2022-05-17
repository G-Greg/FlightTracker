import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAircraftsComponent } from './list-aircrafts.component';

describe('ListAircraftsComponent', () => {
  let component: ListAircraftsComponent;
  let fixture: ComponentFixture<ListAircraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAircraftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAircraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
