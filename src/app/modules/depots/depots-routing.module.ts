import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepotComponent } from './components/depot/depot.component';

const routes: Routes = [
  {
    path: 'add-depot', component: DepotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepotsRoutingModule { }
