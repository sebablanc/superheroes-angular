import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AvatarCardComponent } from './avatar-card/avatar-card.component';
import { NewHeroButtonComponent } from './new-hero-button/new-hero-button.component';
import { BigButtonComponent } from './big-button/big-button.component';
import { InputHeroComponent } from './input-hero/input-hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaHeroComponent } from './textarea-hero/textarea-hero.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { SelectHeroComponent } from './select-hero/select-hero.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivasModule } from '../directivas/directivas.module';

@NgModule({
  declarations: [
    AvatarCardComponent,
    NewHeroButtonComponent,
    BigButtonComponent,
    InputHeroComponent,
    TextareaHeroComponent,
    BotoneraComponent,
    SelectHeroComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    PipesModule,
    DirectivasModule
  ],
  exports: [
    AvatarCardComponent,
    NewHeroButtonComponent,
    BigButtonComponent,
    InputHeroComponent,
    TextareaHeroComponent,
    BotoneraComponent,
    SelectHeroComponent,
    CarouselComponent
  ]
})
export class UiModule { }