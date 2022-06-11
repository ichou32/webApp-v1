import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingModule } from './modules/billing/billing.module';
import { DepotsModule } from './modules/depots/depots.module';
import { DeviceModule } from './modules/devices/device.module';
import { DispatcherModule } from './modules/dispatchers/dispatcher.module';
import { FleetModule } from './modules/fleets/fleet.module';
import { GeofenceModule } from './modules/geofences/geofence.module';
import { GroupModule } from './modules/groups/group.module';
import { JobModule } from './modules/jobs/job.module';
import { MerchantModule } from './modules/merchants/merchant.module';
import { ProviderModule } from './modules/providers/provider.module';
import { SettingModule } from './modules/settings/setting.module';
import { WorkerModule } from './modules/workers/worker.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BillingModule,
    DepotsModule,
    DeviceModule,
    DispatcherModule,
    FleetModule,
    GeofenceModule,
    GroupModule,
    JobModule,
    MerchantModule,
    ProviderModule,
    SettingModule,
    WorkerModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
