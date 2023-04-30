import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/clases/experiencia';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  @Input() experiencia: Experiencia | any;
  @Output() cambios = new EventEmitter();

  public formExperiencia: FormGroup;

  nombre_empresa: string = "";
  descripcion: string = "";
  aneos: string = "";
  direccion: string = "";
  url_logo: string = "";

  estadoFormAlta: boolean = true;
  loading = false;

  constructor(
    private ExperienciasService: ExperienciasService,
    private NgbModal: NgbModal,
    private FormBuilder: FormBuilder,
    private AuthService: AuthService
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
    if (this.experiencia != null || this.experiencia != undefined) {
      this.nombre_empresa = this.experiencia.nombre_empresa;
      this.descripcion = this.experiencia.descripcion;
      this.aneos = this.experiencia.aneos;
      this.direccion = this.experiencia.direccion;
      this.url_logo = this.experiencia.url_logo;
    }
  }

  onUpdateExperiencia(): void {
    if (this.formExperiencia.valid) {
      if(this.estadoFormAlta != true){
        let experienciaUpdate = this.experiencia;

        experienciaUpdate.nombre_empresa = this.formExperiencia.get("nombre_empresa")?.value;
        experienciaUpdate.descripcion = this.formExperiencia.get("descripcion")?.value;
        experienciaUpdate.aneos = this.formExperiencia.get("aneos")?.value;
        experienciaUpdate.direccion = this.formExperiencia.get("direccion")?.value;
        experienciaUpdate.url_logo = this.formExperiencia.get("url_logo")?.value;
  
        this.ExperienciasService.update(experienciaUpdate).subscribe();
  
        this.modalClose();
      }else{
        this.onAddExperiencia();
      }
    }
  }

  onAddExperiencia():void{
    let experienciaNew : Experiencia = new Experiencia(
      this.formExperiencia.get("nombre_empresa")?.value,
      this.formExperiencia.get("descripcion")?.value,
      this.formExperiencia.get("aneos")?.value,
      this.formExperiencia.get("direccion")?.value,
      this.formExperiencia.get("url_logo")?.value,
      this.AuthService.logeado.getId_persona()
    );

    this.ExperienciasService.create(experienciaNew).subscribe();

    this.cambiosProyectos();
    
    this.procesoLoading();
  }

  procesoLoading(){
    this.loading = true;
    
    setTimeout(() => {
      this.loading = false;
      this.modalClose()
    }, 1300);
  }


  cambiosProyectos(){
    this.cambios.emit(true);
  }

  
  modalClose() {
    this.NgbModal.dismissAll();
  }
}
