import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcComponent } from './dc.component';

const routes: Routes = [
    {
        path: 'dc',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DcComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DcRoutingModule {}