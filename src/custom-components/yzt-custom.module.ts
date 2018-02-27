// ---------------------------------------------------------
// | Imports
// ---------------------------------------------------------

// Common of angular
import { ModuleWithProviders, NgModule } from '@angular/core';

// Services

// Directives
import { DirectivesModule } from './share/directives/yzt-directives.modules';

// Tokens (eg. global services' config)
import { NzRootConfig } from '../components/ng-zorro-antd.module';

// Modules
import { GoodSelectModule } from './good-select/good-select.component';
import { NgZorroAntdModule } from '../components/ng-zorro-antd.module';
import { EchartsModule } from './echarts/echarts.component';
import { UIGridModule } from './ui-grid/ui-grid.component';
import { ShipperSelectModule } from "./shipper-select/shipper-select.component";
import { GridIconModule } from './ui-grid/grid-icon.component';
import { YztUploadModule } from './upload/yzt-upload.module';
import { YZTViewerDirectiveModule } from './yzt-viewer/yzt-viewer.directive';
import { RepairGoodSelectModule } from './repair-goods-select/repair-goods-select.component';
import { CneeSelectModule } from "./cnee-select/cnee-select.component";
import { MasterSelectModule } from "./master-select/master-select.component";
import { AreaSelectModule } from './area-select/area-select.component';
import { AbnormalSelectModule } from './abnormal-select/abnormal-select.component';
// ---------------------------------------------------------
// | Exports
// ---------------------------------------------------------
// interface
export * from './upload/interface';

// Modules
export { YztUploadModule } from './upload/yzt-upload.module';
export { AreaSelectModule } from './area-select/area-select.component';
export { AbnormalSelectModule } from './abnormal-select/abnormal-select.component';

// Components

// Services

// Tokens (eg. global services' config)
export { NzRootConfig } from '../components/ng-zorro-antd.module';

// ---------------------------------------------------------
// | Root module
// ---------------------------------------------------------

@NgModule({
  exports: [
    NgZorroAntdModule,
    GoodSelectModule,
    EchartsModule,
    UIGridModule,
    ShipperSelectModule,
    RepairGoodSelectModule,
    GridIconModule,
    DirectivesModule,
    YztUploadModule,
    YZTViewerDirectiveModule,
    CneeSelectModule,
    MasterSelectModule,
    AbnormalSelectModule,
    AreaSelectModule
  ]
})
export class YztCustomModule {

  static forRoot(options?: NzRootConfig): ModuleWithProviders {
    return {
      ngModule: YztCustomModule,
      providers: [
        // Services
      ]
    };
  }
}