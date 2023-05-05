import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
  faPlus: any = faPlus;

  hss: any = [];
  hssPersona: any = [];

  constructor(
    public AuthService:AuthService,
    private NgbModal: NgbModal,
    private HardSoftSkillsService: HardSoftSkillsService
  ) {    
    this.getHSS();    
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
    this.hssPersona = [];

    for (const exp of this.hss) {
      if(exp.id_usuario == this.AuthService.logeado?.getId_persona()){
        this.hssPersona.push(exp);
      }
    }
  }

  actualizarDatos($event: boolean){
    if($event){
      this.getHSS();
    }
  }

  getHSS():void{
    setTimeout(() => {      
      this.HardSoftSkillsService.getAll().subscribe( datos => {        
        this.hss = datos;
        this.getHSSXpersona();      
      });
    }, 500);
  }
}
