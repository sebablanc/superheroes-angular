import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.scss']
})
export class AvatarCardComponent implements OnInit {

  @Input() personaje: Personaje = new Personaje();
  @Input() showCasa: boolean = true;
  @Output() avatarCardClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
}
