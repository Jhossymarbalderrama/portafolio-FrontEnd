import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-descripcion',
  templateUrl: './edit-descripcion.component.html',
  styleUrls: ['./edit-descripcion.component.css']
})
export class EditDescripcionComponent implements OnInit {

  descripcion:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
