import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './components/destination/destination.component';
import { OrderComponent } from './components/order/order.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PodComponent } from './components/pod/pod.component';
import { SenderComponent } from './components/sender/sender.component';

const routes: Routes = [
  { 
    path: 'overview', component: OverviewComponent
  },
  { 
    path: 'destination', component: DestinationComponent
  },
  { 
    path: 'order', component: OrderComponent
  },
  { 
    path: 'pod', component: PodComponent
  },
  { 
    path: 'sender', component: SenderComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
