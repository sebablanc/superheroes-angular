import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerLinks = [
    {label: 'Principal', onClick: ()=> { this.changePage('home')}},
    {label: 'Todos', onClick: ()=> { this.changePage('todos-personajes')}},
    {label: 'Marvel', onClick: ()=> { this.changePage('marvel')}},
    {label: 'DC', onClick: ()=> { this.changePage('dc')}},
    {label: 'tops', onClick: ()=> { this.changePage('tops')}},
    {label: 'Sobre Nosotros', onClick: ()=> { this.mostrarModal()}}
  ];

  changeHeader: boolean = false;

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.changeHeader = this.location.path().includes('dc');
  }

  changePage(page: string){
    this.router.navigateByUrl(page);
  }

  mostrarModal(){
    alert('Este sería el modal');
  }
}
