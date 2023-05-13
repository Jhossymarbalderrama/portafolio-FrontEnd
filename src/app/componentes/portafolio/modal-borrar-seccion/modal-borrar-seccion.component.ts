import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducacionesService } from 'src/app/servicios/educaciones.service';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { HardSoftSkillsService } from 'src/app/servicios/hard-soft-skills.service';
import { PersonasService } from 'src/app/servicios/personas.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-borrar-seccion',
  templateUrl: './modal-borrar-seccion.component.html',
  styleUrls: ['./modal-borrar-seccion.component.css']
})
export class ModalBorrarSeccionComponent implements OnInit {

  @Input() elementoBaja: any;
  @Output() cambios = new EventEmitter();

  loading = false;

  constructor(
    private NgbModal: NgbModal,
    private PersonasService: PersonasService,
    private ExperienciasService: ExperienciasService,
    private EducacionesService: EducacionesService,
    private HardSoftSkillsService: HardSoftSkillsService,
    private ProyectosService: ProyectosService
  ) { }

  ngOnInit(): void {

  }

  deleteElemento() {
    switch (this.elementoBaja.tipo) {
      case "SOBRE_MI":
        this.deleteSobreMi();
        break;
      case "EXPERIENCIA":
        this.deleteExperiencia();
        break;
      case "EDUCACION":
        this.deleteEducacion();
        break;
      case "HSS":
        this.deleteHSS();
        break;
      case "PROYECTO":
        this.deleteProyeto();
        break;
    }
  }


  deleteSobreMi(): void {
    let deleteSobremi: any = this.elementoBaja.objeto;

    deleteSobremi.sobre_mi = '';

    this.PersonasService.update(deleteSobremi).subscribe();

    this.cambiosPortafolio();
  }

  deleteExperiencia(): void {
    this.ExperienciasService.delete(this.elementoBaja.objeto.id).subscribe();

    this.cambiosPortafolio();
  }

  deleteEducacion(): void {
    this.EducacionesService.delete(this.elementoBaja.objeto.id).subscribe();

    this.cambiosPortafolio();
  }

  deleteHSS(): void {
    this.HardSoftSkillsService.delete(this.elementoBaja.objeto.id).subscribe();
    this.cambiosPortafolio();
  }

  deleteProyeto(): void {
    this.ProyectosService.delete(this.elementoBaja.objeto.id).subscribe();
    this.cambiosPortafolio();
  }

  cambiosPortafolio():void{
    this.loading = true;
    setTimeout(() => {
      this.cambiosProyectos();
      this.procesoLoading();
    }, 1000);    
  }

  procesoLoading(){      
    this.loading = false;
    this.modalClose();    
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }

  cambiosProyectos() {
    this.cambios.emit(true);
  }
}
