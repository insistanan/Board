import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './page-dashboard.component';
import { PageDashboardRoutingModule } from './page-dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CompRotateTrayComponent } from './comp-rotate-tray/comp-rotate-tray.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CompBoxCenterPrefixComponent } from './comp-box-center-prefix/comp-box-center-prefix.component';
import { CompBoxCenterSuffixComponent } from './comp-box-center-suffix/comp-box-center-suffix.component';
import { CompBoxSwiperComponent } from './comp-box-swiper/comp-box-swiper.component';
import { CompBoxNumLargeComponent } from './comp-box-num-large/comp-box-num-large.component';
import { CompBoxNumSmallComponent } from './comp-box-num-small/comp-box-num-small.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CompBoxSwiper2Component } from './comp-box-swiper2/comp-box-swiper2.component';
import { CompBoxCenterPrefix2Component } from './comp-box-center-prefix2/comp-box-center-prefix2.component';
import { CompBoxCenterSuffix2Component } from './comp-box-center-suffix2/comp-box-center-suffix2.component';
import { CompBoxVideoComponent } from './comp-box-video/comp-box-video.component';
import { CompFrameViewComponent } from './comp-frame-view/comp-frame-view.component';
import { CompViewPptComponent } from './comp-view-ppt/comp-view-ppt.component';
import { CompModalComponent } from './comp-modal/comp-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageDashboardComponent, CompRotateTrayComponent, CompBoxCenterPrefixComponent, CompBoxCenterSuffixComponent, CompBoxSwiperComponent, CompBoxNumLargeComponent, CompBoxNumSmallComponent, CompBoxSwiper2Component, CompBoxCenterPrefix2Component, CompBoxCenterSuffix2Component, CompBoxVideoComponent, CompFrameViewComponent, CompViewPptComponent, CompModalComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PageDashboardRoutingModule,
    IconsProviderModule,
    NzCarouselModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    FormsModule
  ]
})
export class PageDashboardModule { }
