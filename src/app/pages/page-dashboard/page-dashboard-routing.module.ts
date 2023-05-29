import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDashboardComponent } from './page-dashboard.component'

const routes: Routes = [
  { path: '', component: PageDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageDashboardRoutingModule { }