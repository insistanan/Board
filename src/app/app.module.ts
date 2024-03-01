// 用于在浏览器中运行应用，是Angular应用运行的基础。
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 定义了应用的路由配置，管理页面导航。
import { AppRoutingModule } from './app-routing.module';
// 应用的引导（或根）组件是AppComponent。这是Angular启动时加载的第一个组件，并作为应用的根容器
import { AppComponent } from './app.component';
// LocationStrategy与HashLocationStrategy：这里配置的是URL的策略，使用HashLocationStrategy意味着你的应用将使用哈希(#)风格的URL，这对于旧版浏览器或SEO不是重点的应用来说是有用的
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
// 可能是一个自定义模块，用于集中管理服务
import { ServicesModule } from './services/services.module';
// NZ_I18N和zh_CN：这是为了使用ng-zorro-antd库提供的国际化支持配置，将应用的语言设置为简体中文
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';
// 允许使用表单相关的功能，如双向数据绑定。
import { FormsModule } from '@angular/forms';
// 提供HTTP通信功能，用于与远端服务器通信
import { HttpClientModule } from '@angular/common/http';
// 启用Angular的浏览器动画功能。
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 自定义模块，用于提供应用所需的图标
import { IconsProviderModule } from './icons-provider.module';

// 注册简体中文数据，支持在应用中使用中文
registerLocaleData(zh);

// @NgModule是Angular中的一个关键装饰器，用于定义一个Angular模块（Module）
@NgModule({
  // declarations（声明）:
  // 这个属性用来声明模块内部Components（组件）、Directives（指令）和Pipes（管道）。
  // 声明的目的是让Angular知道这些组件、指令和管道属于该模块，这样Angular在编译过程中就可以正确地处理它们。
  // 只有在此模块中声明的组件、指令和管道才能在该模块的组件模板中直接使用。
  declarations: [
    AppComponent
  ],
  // imports（导入）:
  // 这个属性用于导入其他模块，这样就可以在当前模块中使用被导入模块所导出的组件、指令、管道以及服务等。
  // 例如，如果你想在你的模块中使用表单相关的指令（如ngModel），你需要在imports数组中导入FormsModule。
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule
  ],
  // providers（提供者）:
  // 这个属性用于注册该模块中将要使用的服务提供者。
  // 在这里注册的服务可以在整个模块中的任何地方通过依赖注入（DI）的方式被访问和使用。
  // 这对于在应用的不同部分之间共享数据和功能特别有用。
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  // bootstrap（引导）:
  // 这个属性定义了应用的根组件，Angular通过它来启动应用。
  // 这个根组件会被添加到index.html的DOM中。
  // 通常，这里只有一个组件，即应用的主组件。
  bootstrap: [AppComponent]
})
export class AppModule { }

// @NgModule是Angular中的一个关键装饰器，用于定义一个Angular模块（Module）

// declarations（声明）:
// 这个属性用来声明模块内部Components（组件）、Directives（指令）和Pipes（管道）。
// 声明的目的是让Angular知道这些组件、指令和管道属于该模块，这样Angular在编译过程中就可以正确地处理它们。
// 只有在此模块中声明的组件、指令和管道才能在该模块的组件模板中直接使用。

// imports（导入）:
// 这个属性用于导入其他模块，这样就可以在当前模块中使用被导入模块所导出的组件、指令、管道以及服务等。
// 例如，如果你想在你的模块中使用表单相关的指令（如ngModel），你需要在imports数组中导入FormsModule。

// providers（提供者）:
// 这个属性用于注册该模块中将要使用的服务提供者。
// 在这里注册的服务可以在整个模块中的任何地方通过依赖注入（DI）的方式被访问和使用。
// 这对于在应用的不同部分之间共享数据和功能特别有用。

// bootstrap（引导）:
// 这个属性定义了应用的根组件，Angular通过它来启动应用。
// 这个根组件会被添加到index.html的DOM中。
// 通常，这里只有一个组件，即应用的主组件。

// exports（导出）:
// 这个属性是可选的，用于导出那些能在其他模块的组件模板中使用的组件、指令和管道。
// 只有被导出的组件、指令和管道才能在模块外被使用。
