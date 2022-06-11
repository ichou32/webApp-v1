import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchersComponent } from './components/dispatchers/dispatchers.component';

const routes: Routes = [
  {
    path: 'dispatchers', component: DispatchersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatcherRoutingModule { }
