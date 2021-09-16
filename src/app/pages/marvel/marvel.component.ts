import { Component, OnInit } from '@angular/core';
import { CasasEnum } from 'src/app/helpers/casas-enum';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {

  personajes: Array<Personaje> = [];
  house = CasasEnum.MARVEL;

  constructor(private personajesSrv: PersonajesService) { }

  ngOnInit(): void {
    this.personajes = this.personajesSrv.getPersonajesPorCasa(this.house);
  }

}
