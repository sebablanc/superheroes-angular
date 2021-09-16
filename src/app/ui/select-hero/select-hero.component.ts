import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.scss']
})
export class SelectHeroComponent implements OnInit {
  @Input() config: SelectConfig | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface SelectConfig {
  label: string;
  formControlName: string;
  form: FormGroup;
}
