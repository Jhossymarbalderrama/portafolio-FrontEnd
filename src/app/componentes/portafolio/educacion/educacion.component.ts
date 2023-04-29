import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EducacionesService } from 'src/app/servicios/educaciones.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  faEdit: any = faEdit;
  faWindowClose: any = faTimesCircle;
  
  eduaciones: any = [];
  eduacionesPersona: any = [];

  constructor(
    public AuthService:AuthService,
    private NgbModal: NgbModal,
    private EducacionesService:EducacionesService
  ) { 
    let id: any = this.AuthService.logeado.getId_persona();

    this.EducacionesService.getAll().subscribe( datos => {
      this.eduaciones = datos;
      this.getEducacionsXpersona();      
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

  getEducacionsXpersona():void{
    for (const edu of this.eduaciones) {
      if(edu.id_usuario == this.AuthService.logeado.getId_persona()){
        this.eduacionesPersona.push(edu);
      }
    }
  }
}
