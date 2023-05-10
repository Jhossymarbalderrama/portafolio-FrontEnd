import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/servicios/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  faEdit: any = faEdit;
  faWindowClose: any = faTimesCircle;
  faPlus: any = faPlus;

  experiencias: any = [];
  experienciaPersona: any = [];

  constructor(
    public AuthService: AuthService,
    private NgbModal: NgbModal,
    private ExperienciasService: ExperienciasService
  ) {
    this.getProyectos();
  }

  ngOnInit(): void {
  }

  openModal(modal: any) {
    this.NgbModal.open(modal, { centered: true });
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }


  getExperienciaXpersona():void{
    this.experienciaPersona = [];
    for (const exp of this.experiencias) {
      if(exp.id_usuario == this.AuthService.logeado?.getId_persona()){
        this.experienciaPersona.push(exp);
      }
    }
  }

  actualizarDatos($event: boolean){
    if($event){
      this.getProyectos();
    }
  }

  getProyectos():void{
    setTimeout(() => {
      this.ExperienciasService.getAll().subscribe( datos => {
        this.experiencias = datos;
        this.getExperienciaXpersona();      
      });
    }, 600);
  }
}
