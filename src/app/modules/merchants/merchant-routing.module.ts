import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMerchantComponent } from './components/add-merchant/add-merchant.component';

const routes: Routes = [
  { 
    path: 'add-merchant', component: AddMerchantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
