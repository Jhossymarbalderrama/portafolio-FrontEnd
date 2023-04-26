import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  nombre_empresa: string = "";
  descripcion: string = "";
  aneos: string = "";
  direccion: string = "";
  url_logo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
