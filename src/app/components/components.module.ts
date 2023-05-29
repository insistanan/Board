import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCardComponent } from './app-card/app-card.component';
import { AppChartBLComponent } from './app-chart-b-l/app-chart-b-l.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppProgressLatticeComponent } from './app-progress-lattice/app-progress-lattice.component';
import { AppTransNumberComponent } from './app-trans-number/app-trans-number.component';
import { AppChartBCylinderComponent } from './app-chart-b-cylinder/app-chart-b-cylinder.component';



@NgModule({
  declarations: [
    AppCardComponent,
    AppChartBLComponent,
    AppProgressLatticeComponent,
    AppTransNumberComponent,
    AppChartBCylinderComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [
    AppCardComponent,
    AppChartBLComponent,
    AppProgressLatticeComponent,
    AppTransNumberComponent,
    AppChartBCylinderComponent
  ]
})
export class ComponentsModule { }
