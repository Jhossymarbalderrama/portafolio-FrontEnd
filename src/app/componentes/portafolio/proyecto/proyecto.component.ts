import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
  faPlus: any = faPlus;

  proyectos: any = [];
  proyectosPersona: any = [];

  constructor(
    public AuthService:AuthService,
    private NgbModal: NgbModal,
    public ProyectosService: ProyectosService
  ) {
    this.getProyectos();
  }
  
  ngOnInit(): void {   
  }

  openModal(modal: any) {
    this.NgbModal.open(modal, { centered: true});
  }
  
  modalClose() {
    this.NgbModal.dismissAll();
  }

 
  
  actualizarDatos($event: boolean){
    if($event){
      this.getProyectos();
    }
  }

  getProyectos():void{
    setTimeout(() => {
      this.ProyectosService.getAll().subscribe(datos =>{               
        this.proyectos = datos;
        this.getProyectosXpersona();  
      });
    }, 1000);
  }

  getProyectosXpersona():void{
    this.proyectosPersona = [];

    for (const edu of this.proyectos) {
      if(edu.id_usuario == this.AuthService.logeado?.getId()){
        this.proyectosPersona.push(edu);
      }
    }
  }
}
