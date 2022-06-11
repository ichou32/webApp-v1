import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeofenceRoutingModule } from './geofence-routing.module';
import { AddGeofenceComponent } from './components/add-geofence/add-geofence.component';


@NgModule({
  declarations: [
    AddGeofenceComponent
  ],
  imports: [
    CommonModule,
    GeofenceRoutingModule
  ]
})
export class GeofenceModule { }
