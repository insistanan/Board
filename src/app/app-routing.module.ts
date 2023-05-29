import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/page-dashboard' },
  { path: 'page-dashboard', loadChildren: () => import('./pages/page-dashboard/page-dashboard.module').then(m => m.PageDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
