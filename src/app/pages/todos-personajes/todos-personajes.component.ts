import { Component, OnInit } from '@angular/core';
import { CasasEnum } from 'src/app/helpers/casas-enum';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-todos-personajes',
  templateUrl: './todos-personajes.component.html',
  styleUrls: ['./todos-personajes.component.scss']
})
export class TodosPersonajesComponent implements OnInit {
  
  personajes: Array<Personaje> = [];
  house = CasasEnum.HOME;
  extraClass = CasasEnum.TODOS;
  
  constructor(private personajesSrv: PersonajesService) { }

  ngOnInit(): void {
    this.personajes = this.personajesSrv.getAllPersonajes();
  }
}
