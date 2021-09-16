import { NgModule } from '@angular/core';
import { LayoutsModule } from 'src/app/comunes/layouts/layouts.module';
import { ViewsModule } from 'src/app/comunes/views/views.module';
import { MarvelComponent } from './marvel.component';
import { MarvelRoutingModule } from './marvel.routing';

@NgModule({
  declarations: [
      MarvelComponent
  ],
  imports: [
      MarvelRoutingModule,
      LayoutsModule,
      ViewsModule
  ],
})
export class MarvelModule { }