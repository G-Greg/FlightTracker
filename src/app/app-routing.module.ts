import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListAircraftsComponent } from './list-aircrafts/list-aircrafts.component';
import { PlaneComponent } from './plane/plane.component';

const routes: Routes = [
  { path: 'aircrafts', component: ListAircraftsComponent},
  { path: 'aircraft/:id', component: PlaneComponent},
  { path: 'aircraft/edit/:id', component: PlaneComponent},
  { path: 'aircraft/new', component: PlaneComponent},
  //{ path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
