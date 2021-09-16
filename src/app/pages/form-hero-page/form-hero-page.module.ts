import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from 'src/app/comunes/layouts/layouts.module';
import { ViewsModule } from 'src/app/comunes/views/views.module';
import { UiModule } from 'src/app/ui/ui.module';
import { FormHeroPageComponent } from './form-hero-page.component';
import { FormHeroPageRoutingModule } from './form-hero-page.routing';

@NgModule({
  declarations: [
    FormHeroPageComponent
  ],
  imports: [
    CommonModule,
    FormHeroPageRoutingModule,
    LayoutsModule,
    ViewsModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
})
export class FormHeroModule { }