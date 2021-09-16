import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss']
})
export class BotoneraComponent implements OnInit {
  @Output() btnDeleteClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() btnCancelClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() btnSubmitClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
}
