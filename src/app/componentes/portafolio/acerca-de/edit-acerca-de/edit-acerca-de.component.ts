import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  titulo:string = "";
  nombre:string = "";
  apellido:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }
}
