import { Injectable } from '@angular/core';
import { Config } from './config';

declare global
{
    /* extends Application to window global variable */
    var App: TApplication | undefined;
    interface Window
    {
        App: TApplication | undefined;
    }
}
const that = this;
@Injectable()
export class TApplication
{
  constructor()
  {
    window.App = this;
    var host = window.location.host;
    Config.Host_url = `http://${host}/wms_mh`;
  }
}