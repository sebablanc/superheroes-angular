import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-hero-button',
  templateUrl: './new-hero-button.component.html',
  styleUrls: ['./new-hero-button.component.scss']
})
export class NewHeroButtonComponent implements OnInit {
  @Output() newHeroButtonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
