import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosPersonajesComponent } from './todos-personajes.component';

const routes: Routes = [
    {
        path: 'todos-personajes',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: TodosPersonajesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosPersonajesRoutingModule {}