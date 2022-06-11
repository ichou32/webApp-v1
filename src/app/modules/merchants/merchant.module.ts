import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { AddMerchantComponent } from './components/add-merchant/add-merchant.component';


@NgModule({
  declarations: [
    AddMerchantComponent
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule
  ]
})
export class MerchantModule { }
