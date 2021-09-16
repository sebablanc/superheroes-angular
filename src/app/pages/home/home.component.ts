import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';
import { ConfigBigButton } from 'src/app/ui/big-button/big-button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  personajesMarvel: Array<Personaje> = [];
  personajesDC: Array<Personaje> = [];
  personajesComunidad: Array<Personaje> = [];

  bigButtonsConfig: Array<ConfigBigButton> = [
    {label: 'Todos los personajes', icon: 'flying-superhero.png', description: 'Acá podrás ver una selección de todos los personajes en nuestro sistema', returnData: 'todos-personajes'},
    {label: 'Casa Marvel', icon: 'power-superhero.png', icon2: 'flying-superhero.png', description: 'Acá podrás ver una selección de los personajes de la casa Marvel', returnData: 'marvel'},
    {label: 'Casa DC', icon: 'standing-superhero.jpg', icon2: 'power-superhero.png', description: 'Acá podrás ver una selección de los personajes de la casa DC', returnData: 'dc'},
  ];

  constructor(private personajesSrv: PersonajesService, private router: Router) { }

  ngOnInit(): void {
    this.personajesSrv.getAllPersonajes();
    this.personajesMarvel = this.personajesSrv.top5Marvel();
    this.personajesDC = this.personajesSrv.top5DC();
    this.personajesComunidad = this.personajesSrv.top5Comunidad();
  }

  changePage(page: string){
    this.router.navigateByUrl(page);
  }
}
