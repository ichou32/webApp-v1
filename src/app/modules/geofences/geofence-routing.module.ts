import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGeofenceComponent } from './components/add-geofence/add-geofence.component';

const routes: Routes = [
  {
    path: 'geofence', component: AddGeofenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeofenceRoutingModule { }
