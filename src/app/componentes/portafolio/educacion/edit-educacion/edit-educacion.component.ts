import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  nombre_establecimiento: string = "";
  titulo: string = "";
  descripcion: string = "";
  aneos: string = "";
  direccion: string = "";
  url_logo: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
