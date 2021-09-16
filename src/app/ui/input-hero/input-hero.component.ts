import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-hero',
  templateUrl: './input-hero.component.html',
  styleUrls: ['./input-hero.component.scss']
})
export class InputHeroComponent implements OnInit {

  @Input() config: InputConfig | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}

export interface InputConfig {
  label: string;
  formControlName: string;
  form: FormGroup;
  type: string;
}
