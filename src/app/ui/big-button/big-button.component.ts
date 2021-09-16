import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent implements OnInit {

  @Output() bigButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() config: ConfigBigButton = {
    label: '',
    description: '',
    icon: '',
    returnData: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}

export interface ConfigBigButton{
  label: string;
  icon: string;
  icon2?: string;
  description: string;
  returnData: any;
}
