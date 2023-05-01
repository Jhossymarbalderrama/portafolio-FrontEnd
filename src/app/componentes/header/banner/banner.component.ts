import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/clases/persona';
import { PersonasService } from 'src/app/servicios/personas.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona : Persona | any;

  faEdit: any = faEdit;
  
  
  constructor(
    public AuthService:AuthService,
    private NgbModal: NgbModal,
    private PersonasService: PersonasService
  ) { 
    let id:any = this.AuthService.logeado.getId_persona();

    this.PersonasService.getPersona(id).subscribe( dato =>{
      this.persona = dato;
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
}
