import { NgModule } from '@angular/core';
import { CasaColorDirective } from './casa-color.directive';

@NgModule({
  declarations: [
    CasaColorDirective
  ],
  exports: [
    CasaColorDirective
  ],
})
export class DirectivasModule { }