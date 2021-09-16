import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.scss']
})
export class TopsComponent implements OnInit {

  personajesMarvel: Array<Personaje> = [];
  personajesDC: Array<Personaje> = [];
  personajesComunidad: Array<Personaje> = [];

  constructor(private personajesSrv: PersonajesService) { }

  ngOnInit(): void {
    this.personajesSrv.getAllPersonajes();
    this.personajesMarvel = this.personajesSrv.top5Marvel();
    this.personajesDC = this.personajesSrv.top5DC();
    this.personajesComunidad = this.personajesSrv.top5Comunidad();
  }

}
