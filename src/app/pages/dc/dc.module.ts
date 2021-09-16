import { NgModule } from '@angular/core';
import { LayoutsModule } from 'src/app/comunes/layouts/layouts.module';
import { ViewsModule } from 'src/app/comunes/views/views.module';
import { DcComponent } from './dc.component';
import { DcRoutingModule } from './dc.routing';

@NgModule({
  declarations: [
      DcComponent
  ],
  imports: [
      DcRoutingModule,
      LayoutsModule,
      ViewsModule
  ],
})
export class DCModule { }