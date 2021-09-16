import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private logs: Array<string> = [];

  constructor() { }

  log(message: string){
    this.logs.push(message);
    console.log(message);
  }

  getLogs(){
    return this.logs;
  }
}
