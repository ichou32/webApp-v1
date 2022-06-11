import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerRoutingModule } from './worker-routing.module';
import { AddWorkerComponent } from './components/add-worker/add-worker.component';


@NgModule({
  declarations: [
    AddWorkerComponent
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule
  ]
})
export class WorkerModule { }
