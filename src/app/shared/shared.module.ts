import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/menu/side-bar/side-bar.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/menu/header/header.component';
import { HomeComponent } from './components/menu/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
