import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetRoutingModule } from './fleet-routing.module';
import { AddFleetComponent } from './components/add-fleet/add-fleet.component';


@NgModule({
  declarations: [
    AddFleetComponent
  ],
  imports: [
    CommonModule,
    FleetRoutingModule
  ]
})
export class FleetModule { }
