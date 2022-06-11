import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepotsRoutingModule } from './depots-routing.module';
import { AddDepotComponent } from './components/add-depot/add-depot.component';
import { DepotComponent } from './components/depot/depot.component';


@NgModule({
  declarations: [
    AddDepotComponent,
    DepotComponent
  ],
  imports: [
    CommonModule,
    DepotsRoutingModule
  ]
})
export class DepotsModule { }
