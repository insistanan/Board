import { NgModule } from '@angular/core';
// 引入Routes和RouterModule。
// Routes用于定义路由数组，即应用中的路由规则。
// RouterModule是Angular的路由模块，用于配置和管理应用的路由。
import { Routes, RouterModule } from '@angular/router';

// 定义路由规则
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/page-dashboard' },
  { path: 'page-dashboard', loadChildren: () => import('./pages/page-dashboard/page-dashboard.module').then(m => m.PageDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
