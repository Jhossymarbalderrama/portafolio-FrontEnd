import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/clases/experiencia';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  @Input () experiencia: Experiencia | any;

  public formExperiencia: FormGroup;

  nombre_empresa: string = "";
  descripcion: string = "";
  aneos: string = "";
  direccion: string = "";
  url_logo: string = "";

  constructor(
    private ExperienciasService: ExperienciasService,
    private NgbModal: NgbModal,
    private FormBuilder:FormBuilder
  ) { 
    this.formExperiencia = this.FormBuilder.group({
      url_logo: ['', [Validators.required]],
      nombre_empresa: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      aneos: ['', [Validators.required]],
      direccion: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.nombre_empresa = this.experiencia.nombre_empresa;
    this.descripcion = this.experiencia.descripcion;
    this.aneos = this.experiencia.aneos;
    this.direccion = this.experiencia.direccion;
    this.url_logo = this.experiencia.url_logo;
  }

  onUpdateExperiencia():void{
    if(this.formExperiencia.valid){
      let experienciaUpdate = this.experiencia;

      experienciaUpdate.nombre_empresa = this.formExperiencia.get("nombre_empresa")?.value;
      experienciaUpdate.descripcion = this.formExperiencia.get("descripcion")?.value;
      experienciaUpdate.aneos = this.formExperiencia.get("aneos")?.value;
      experienciaUpdate.direccion = this.formExperiencia.get("direccion")?.value;
      experienciaUpdate.url_logo = this.formExperiencia.get("url_logo")?.value;

      this.ExperienciasService.update(experienciaUpdate).subscribe();

      this.modalClose();
    }
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }
}
