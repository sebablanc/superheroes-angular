import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-views',
  templateUrl: './card-views.component.html',
  styleUrls: ['./card-views.component.scss']
})
export class CardViewsComponent implements OnInit {

  @Input() house: string = '';
  @Input() extraClass: string = '';
  @Input() personajes: any[] = [];

  personajesFiltrados: any[] = [];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.personajesFiltrados = this.personajes;
  }

  changePage(page: string, data: any){
    this.router.navigateByUrl(page, {state: {data: data}});
  }

  filtrarLista(event: string){
    if(event && event.trim() != ''){
      this.personajesFiltrados = this.personajes.filter(personaje =>{
        return personaje.personaje.toLowerCase().includes(event.toLowerCase()) || 
                personaje.nombrePersona.toLowerCase().includes(event.toLowerCase())
      })
    } else {
      this.personajesFiltrados = this.personajes;
    }
    
  }
}
