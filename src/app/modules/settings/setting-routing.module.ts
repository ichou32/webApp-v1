import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/access/access.component';
import { GeneralComponent } from './components/general/general.component';
import { IntegrationComponent } from './components/integration/integration.component';
import { LabelsComponent } from './components/labels/labels.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UOMComponent } from './components/uom/uom.component';

const routes: Routes = [
  { 
    path: 'access', component: AccessComponent
  },
  { 
    path: 'general', component: GeneralComponent
  },
  { 
    path: 'integration', component: IntegrationComponent
  },
  { 
    path: 'label', component: LabelsComponent
  },
  { 
    path: 'notification', component: NotificationsComponent
  },
  { 
    path: 'UOM', component: UOMComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
