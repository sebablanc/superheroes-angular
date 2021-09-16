import { NgModule } from '@angular/core';
import { InicialesMayusculasPipe } from './iniciales-mayusculas.pipe';

@NgModule({
  declarations: [
      InicialesMayusculasPipe
  ],
  exports: [
    InicialesMayusculasPipe
  ],
})
export class PipesModule { }