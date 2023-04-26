import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  nombre_proyecto:string = "";
  descripcion:string = "";
  sistema:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
