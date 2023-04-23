import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  bannerEstado: boolean = false;
  listaUsuarios: any;
  
  constructor(
    private UsuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.UsuariosService.getAll().subscribe(data => {
      this.listaUsuarios = data;    
      console.log(this.listaUsuarios);          
    }); 
  }

}
