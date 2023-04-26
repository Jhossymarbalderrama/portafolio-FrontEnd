import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HardSoftSkillsService } from 'src/app/servicios/hard-soft-skills.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {

  faEdit: any = faEdit;
  faWindowClose: any = faTimesCircle;
  
  hss: any = [];
  hssPersona: any = [];

  constructor(
    public AuthService:AuthService,
    private NgbModal: NgbModal,
    private HardSoftSkillsService: HardSoftSkillsService
  ) {
    let id: any = this.AuthService.logeado.getId_persona();

    this.HardSoftSkillsService.getAll().subscribe( datos => {
      console.log(datos);
      this.hss = datos;
      this.getHSSXpersona();      
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

  getHSSXpersona():void{
    for (const exp of this.hss) {
      if(exp.id_usuario == this.AuthService.logeado.getId_persona()){
        this.hssPersona.push(exp);
      }
    }

    console.log("Hard Soft Skills de la persona con ID: " + this.AuthService.logeado.getId_persona());
    console.log(this.hssPersona);
  }
}
