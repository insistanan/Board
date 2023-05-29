import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TApplication } from './application';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TAuthService } from './auth_service';
import { TApiAppService } from './app_service';

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
    TApplication,
    TApiAppService
  ]
})
export class ServicesModule { }
export { TApplication };
