import { NgModule } from '@angular/core';
// 引入了IconDefinition类型，这是Ant Design图标的类型定义，用于描述一个图标的结构和属性
import { IconDefinition } from '@ant-design/icons-angular';
// 引入了NzIconModule模块和NZ_ICONS令牌。NzIconModule是Ng Zorro AntD Angular库中的图标模块，NZ_ICONS是一个依赖注入令牌，用于在Angular应用中提供图标
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import * as AllIcons from '@ant-design/icons-angular/icons';

// 将AllIcons对象转换为一个键为字符串、值为IconDefinition类型的映射。然后，通过Object.keys获取所有图标的键（即图标的名称），并通过map函数将每个键映射为相应的图标定义，生成一个包含所有图标定义的数组icons
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  imports: [NzIconModule],
  // 将NzIconModule导出，这样它就可以在引入IconsProviderModule的其他模块中使用
  exports: [NzIconModule],
  providers: [
    // 使用provide字段提供了NZ_ICONS令牌，useValue字段指定了要使用的值，即前面定义的所有图标的数组。这样，这些图标就可以在整个应用中通过NZ_ICONS令牌被访问和使用
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
