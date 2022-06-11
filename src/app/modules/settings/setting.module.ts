import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { GeneralComponent } from './components/general/general.component';
import { AccessComponent } from './components/access/access.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LabelsComponent } from './components/labels/labels.component';
import { UOMComponent } from './components/uom/uom.component';
import { IntegrationComponent } from './components/integration/integration.component';


@NgModule({
  declarations: [
    GeneralComponent,
    AccessComponent,
    NotificationsComponent,
    LabelsComponent,
    UOMComponent,
    IntegrationComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
