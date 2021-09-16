import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosPersonajesComponent } from './pages/todos-personajes/todos-personajes.component';
import { TopsComponent } from './pages/tops/tops.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'marvel',
    loadChildren: () => import('./pages/marvel/marvel.module').then( m => m.MarvelModule)
  },
  {
    path: 'form-hero',
    loadChildren: () => import('./pages/form-hero-page/form-hero-page.module').then( m => m.FormHeroModule)
  },
  {
    path: 'todos-personajes',
    loadChildren: () => import('./pages/todos-personajes/todos-personajes.module').then( m => m.TodosPersonajesModule)
  },
  {
    path: 'dc',
    loadChildren: () => import('./pages/dc/dc.module').then( m => m.DCModule)
  },
  {
    path: 'tops',
    loadChildren: () => import('./pages/tops/tops.module').then( m => m.TopsModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
