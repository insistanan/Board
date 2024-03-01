// 导入了 Angular 核心模块中的 enableProdMode 方法，它用于启用生产模式
import { enableProdMode } from '@angular/core';
// 导入了 Angular 平台浏览器动态模块，它允许在浏览器环境中编译和运行 Angular 应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// 导入了应用的根模块 AppModule，通常这是应用的主模块
import { AppModule } from './app/app.module';

// 导入了环境配置文件 environment.ts 或者 environment.prod.ts 中的 environment 对象，用于获取应用的环境配置
import { environment } from './environments/environment';

// 根据环境配置中的 production 属性，判断当前是否处于生产环境。如果是生产环境，调用 enableProdMode() 方法启用 Angular 的生产模式。生产模式会关闭一些开发中的调试功能，以提升性能。
if (environment.production) {
  enableProdMode();
}

// 使用 platformBrowserDynamic() 方法创建了一个 Angular 平台浏览器动态模块的实例，然后调用 bootstrapModule() 方法来启动根模块 AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// 错误处理机制，用于捕获在启动应用时可能发生的错误，并将错误信息打印到控制台
