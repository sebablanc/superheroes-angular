import { Injectable } from '@angular/core';
import personajes from '../../assets/baseDeDatos/personajes.json';
import { Personaje } from '../models/personaje.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  public personajesList: Personaje[] = [];

  constructor(private logger: LoggerService) {

    if(this.personajesList.length == 0){
      personajes.forEach((personaje: any) => {
        let personajeParsed: Personaje = new Personaje();
        Object.assign(personajeParsed, personaje);
        this.personajesList.push(personajeParsed);
      });

      this.ordenarLista();
    }
  }


  getAllPersonajes(){
    this.logger.log(new Date() + ' se ejecutó la función getAllPersonajes() desde ' + this.constructor.name);
    return this.personajesList;
  }

  getPersonajesPorCasa(house: string){
    this.logger.log(new Date() + ' se ejecutó la función getPersonajesPorCasa() desde ' + this.constructor.name + ' con el parámetro ' + house);  
    try {
      this.logger.log('se obtuvieron los datos correctamente')
      return this.personajesList.filter(personaje => {
        return personaje.personajeCasa === house;
      });
    } catch (error) {
      this.logger.log('Error al intentar obtener los datos ' + error);  
      return [];
    }
  }

  top5Marvel(){
    return this.top5PorCasa('marvel');
  }

  top5DC(){
    return this.top5PorCasa('dc');
  }

  private top5PorCasa(casa: string){
    let personajes = this.getPersonajesPorCasa(casa);
    return personajes.filter((personaje, index) => {
      return index < 5
    })
  }
  
  top5Comunidad(){
    let personajes = this.getAllPersonajes();
    return personajes.filter((personaje, index) => {
      return index < 5
    })
  }

  savePersonaje(personaje: Personaje){

    personaje.personajeID = this.personajesList.length;

    this.personajesList.push(personaje);
    
    this.ordenarLista()
  }

  private ordenarLista(){
    this.personajesList.sort((a,b) => a.personajeNombre.toLowerCase() > b.personajeNombre.toLowerCase() ? 1 : -1)
  }

  updatePersonaje(personaje: Personaje){
    let index = this.findIndex(personaje.personajeID);
    if(index>-1){
      Object.assign(this.personajesList[index], personaje);
    }
  }

  findIndex(id:number){
    return this.personajesList.findIndex((personaje) => {
      return personaje.personajeID == id
    });
  }

  deletePersonaje(id: number){
    let index = this.findIndex(id);
    
    if(index>-1) this.personajesList.splice(index, 1);

  }
}
