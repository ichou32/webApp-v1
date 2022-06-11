import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkerComponent } from './components/add-worker/add-worker.component';

const routes: Routes = [
  { 
    path: 'add-worcker', component: AddWorkerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
