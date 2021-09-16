import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-hero',
  templateUrl: './textarea-hero.component.html',
  styleUrls: ['./textarea-hero.component.scss']
})
export class TextareaHeroComponent implements OnInit {

  @Input() config: TextAreaConfig | undefined;

  constructor() { }

  ngOnInit(): void {
    this.textAreaAdjust();
  }

  textAreaAdjust() {
    let element = this.config && this.config.formControlName.trim() !='' ? document.getElementById("textArea-" + this.config.formControlName.toLowerCase()) : null;
    if (element) {
      element.style.height = "1px";
      element.style.height = (25 + element.scrollHeight) + "px";
    }
  }

}

export interface TextAreaConfig {
  label: string;
  formControlName: string;
  form: FormGroup;
}

