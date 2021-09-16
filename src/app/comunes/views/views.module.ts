import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UiModule } from 'src/app/ui/ui.module';
import { CardViewsComponent } from './card-views/card-views.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
      CardViewsComponent,
      SearchBarComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    PipesModule,
    DirectivasModule
  ],
  exports: [
      CardViewsComponent
  ]
})
export class ViewsModule { }