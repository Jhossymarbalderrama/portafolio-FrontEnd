import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  faEdit: any = faEdit;
  faWindowClose: any = faTimesCircle;
  
  proyectos: any = [];
  proyectosPersona: any = [];

  constructor(
    public AuthService:AuthService,
    private NgbModal: NgbModal,
    private ProyectosService: ProyectosService
  ) {
    let id: any = this.AuthService.logeado.getId_persona();

    this.ProyectosService.getAll().subscribe( datos => {
      console.log(datos);
      this.proyectos = datos;
      this.getProyectosXpersona();      
    });
  }
  
  ngOnInit(): void {
  }

  openModal(modal: any) {
    this.NgbModal.open(modal, { centered: true});
  }
  
  modalClose() {
    this.NgbModal.dismissAll();
  }

  getProyectosXpersona():void{
    for (const edu of this.proyectos) {
      if(edu.id_usuario == this.AuthService.logeado.getId_persona()){
        this.proyectosPersona.push(edu);
      }
    }

    console.log("Proyectos de la persona con ID: " + this.AuthService.logeado.getId_persona());
    console.log(this.proyectosPersona);
  }
}
