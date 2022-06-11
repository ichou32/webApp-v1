import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/errors/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/components/menu/home/home.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo : 'home'},
  { path:'home', component:HomeComponent, canActivate: [AuthGuard]},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
