import { Component, OnInit } from '@angular/core';
//import { faEdit } from '@fortawesome/free-regular-svg-icons';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/servicios/auth.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonasService } from 'src/app/servicios/personas.service';
import { Persona } from 'src/app/clases/persona';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  faEdit: any = faEdit;
  faWindowClose: any = faTimesCircle;
  faPlus: any = faPlus;

  persona: any = [];

  constructor(
    public AuthService: AuthService,
    private NgbModal: NgbModal,
    private PersonasService: PersonasService
  ) {    
    this.getDatosPersona();
  }

  ngOnInit(): void {
  }

  openModal(modal: any) {
    this.NgbModal.open(modal, { centered: true });
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }

  actualizarDatos($event: boolean) {
    if ($event) {
      this.getDatosPersona();
    }
  }

  getDatosPersona(): void {
    setTimeout(() => {
      let id: any = this.AuthService.logeado?.getId_persona();
      if (id) {
        this.PersonasService.getPersona(
          id
        ).subscribe(datos_persona => {
          this.persona = datos_persona;
        });
      }
    }, 1000);
  }
}
