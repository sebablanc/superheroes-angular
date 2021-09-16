import { Component, OnInit } from '@angular/core';
import { CasasEnum } from 'src/app/helpers/casas-enum';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.scss']
})
export class DcComponent implements OnInit {
  
  personajes: Array<Personaje> = [];
  house = CasasEnum.DC;

  constructor(private personajesSrv: PersonajesService) { }

  ngOnInit(): void {
    this.personajes = this.personajesSrv.getPersonajesPorCasa(this.house);
  }

}
