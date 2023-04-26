import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-hss',
  templateUrl: './edit-hss.component.html',
  styleUrls: ['./edit-hss.component.css']
})
export class EditHssComponent implements OnInit {

  titulo: string = "";
  detalle: string = "";
  porcentaje: string = "";
  url_imagen: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  captureRange():void{
    let porcentaje = <HTMLInputElement> document.getElementById('porcentaje');

    this.porcentaje = porcentaje.value;    
  }
}
