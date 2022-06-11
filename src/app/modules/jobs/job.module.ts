import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { PodComponent } from './components/pod/pod.component';
import { DestinationComponent } from './components/destination/destination.component';
import { SenderComponent } from './components/sender/sender.component';
import { OrderComponent } from './components/order/order.component';


@NgModule({
  declarations: [
    OverviewComponent,
    PodComponent,
    DestinationComponent,
    SenderComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
