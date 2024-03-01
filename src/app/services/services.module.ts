import { NgModule } from '@angular/core';
// 提供了 Angular 常用的指令和服务，如ngIf和ngFor
import { CommonModule } from '@angular/common';
// 引入了HttpClientModule，这是 Angular 提供的一种方式来执行 HTTP 请求和处理响应
import { HttpClientModule } from '@angular/common/http';
// 引入了旧版的HttpModule，虽然 Angular 推荐使用HttpClientModule，但某些旧项目可能仍然需要HttpModule以保持兼容
import { HttpModule } from '@angular/http';
// 应用中定义的服务，这些服务可能包括应用逻辑、身份验证或与后端 API 的交互
import { TAuthService } from './auth_service';
import { TApiAppService } from './app_service';
import { TApplication } from './application';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    TApplication,
    TAuthService,
    TApiAppService
  ]
})
export class ServicesModule { }
export { TApplication };
