import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutsModule } from 'src/app/comunes/layouts/layouts.module';
import { ViewsModule } from 'src/app/comunes/views/views.module';
import { UiModule } from 'src/app/ui/ui.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutsModule,
    ViewsModule,
    UiModule
  ],
})
export class HomeModule { }