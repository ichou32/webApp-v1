import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatcherRoutingModule } from './dispatcher-routing.module';
import { ActionsComponent } from './components/actions/actions.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ItemViewComponent } from './components/ListView/item-view/item-view.component';
import { EditComponent } from './components/edit/edit.component';
import { DispatchersComponent } from './components/dispatchers/dispatchers.component';
import { AddDispatcherComponent } from './components/add-dispatcher/add-dispatcher.component';


@NgModule({
  declarations: [
    ActionsComponent,
    ListViewComponent,
    ItemViewComponent,
    EditComponent,
    DispatchersComponent,
    AddDispatcherComponent
  ],
  imports: [
    CommonModule,
    DispatcherRoutingModule
  ]
})
export class DispatcherModule { }
