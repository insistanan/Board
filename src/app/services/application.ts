import { Injectable } from '@angular/core';
// 从同级目录下的 config.ts 文件中导入，可能包含一些配置信息，如服务器地址等
import { Config } from './config';

// 全局声明
// 扩展了全局 window 对象，添加了一个可能为 TApplication 类型或 undefined 的 App 属性。
// 这样做是为了在 TypeScript 中使用 window.App 时不会出现类型错误
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
// @Injectable() 装饰器表明 TApplication 类是一个服务，它可以被注入到其他 Angular 组件或服务中
@Injectable()
export class TApplication
{
  constructor()
  {
    window.App = this;
    var host = window.location.host;
    // Config.Host_url = `http://${host}/wms_mh`;
    Config.Host_url = `http://182.109.52.2:28080/wms_mh`;
  }
}
