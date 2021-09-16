import { NgModule } from '@angular/core';
import { LayoutsModule } from 'src/app/comunes/layouts/layouts.module';
import { ViewsModule } from 'src/app/comunes/views/views.module';
import { TodosPersonajesComponent } from './todos-personajes.component';
import { TodosPersonajesRoutingModule } from './todos-personajes.routing';

@NgModule({
  declarations: [
      TodosPersonajesComponent
  ],
  imports: [
    TodosPersonajesRoutingModule,
    LayoutsModule,
    ViewsModule
  ],
})
export class TodosPersonajesModule { }