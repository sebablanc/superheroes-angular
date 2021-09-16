import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelComponent } from './marvel.component';

const routes: Routes = [
    {
        path: 'marvel',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MarvelComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarvelRoutingModule {}