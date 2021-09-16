import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutsModule } from 'src/app/comunes/layouts/layouts.module';
import { UiModule } from 'src/app/ui/ui.module';
import { TopsComponent } from './tops.component';
import { TopsRoutingModule } from './tops.routing';

@NgModule({
  declarations: [
      TopsComponent
  ],
  imports: [
      CommonModule,
      TopsRoutingModule,
      LayoutsModule,
      UiModule
  ],
})
export class TopsModule { }