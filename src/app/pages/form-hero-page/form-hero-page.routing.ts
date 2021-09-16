import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormHeroPageComponent } from './form-hero-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'form-hero',
        pathMatch: 'full'
    },
    {
        path: 'form-hero',
        component: FormHeroPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormHeroPageRoutingModule {}