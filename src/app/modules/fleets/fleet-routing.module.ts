import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFleetComponent } from './components/add-fleet/add-fleet.component';

const routes: Routes = [
  {
    path: 'fleet', component: AddFleetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetRoutingModule { }
