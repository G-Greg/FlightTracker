import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PlaneComponent } from './plane/plane.component';
import { ListAircraftsComponent } from './list-aircrafts/list-aircrafts.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    PlaneComponent,
    ListAircraftsComponent,
    DeleteModalComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
