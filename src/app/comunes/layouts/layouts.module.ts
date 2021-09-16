import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutWithBannerComponent } from './layout-with-banner/layout-with-banner.component';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { LayoutTopsComponent } from './layout-tops/layout-tops.component';

@NgModule({
  declarations: [
      LayoutComponent,
      HeaderComponent,
      LayoutWithBannerComponent,
      LayoutTopsComponent
  ],
  imports: [
    CommonModule,
    DirectivasModule
  ],
  exports: [
      LayoutComponent,
      LayoutWithBannerComponent,
      LayoutTopsComponent
  ]
})
export class LayoutsModule { }