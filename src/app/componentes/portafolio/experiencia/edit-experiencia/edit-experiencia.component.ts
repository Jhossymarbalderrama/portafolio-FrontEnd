import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/clases/experiencia';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/servicios/auth.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  @Input() experiencia: Experiencia | any;
  @Output() cambios = new EventEmitter();

  public formExperiencia: FormGroup;

  public nombre_empresa: string = "";
  public descripcion: string = "";
  public aneos: string = "";
  public direccion: string = "";
  public url_logo: string = "";

  public estadoFormAlta: boolean = true;
  public loading = false;

  constructor(
    private ExperienciasService: ExperienciasService,
    private NgbModal: NgbModal,
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    public ImageService: ImageService
  ) {
    this.formExperiencia = this.FormBuilder.group({      
      nombre_empresa: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      aneos: ['', [Validators.required]],
      direccion: ['', [Validators.required]]
    });

    this.ImageService.url_logo_experiencia == '';
  }

  ngOnInit(): void {
    if (this.experiencia != null || this.experiencia != undefined) {
      this.nombre_empresa = this.experiencia.nombre_empresa;
      this.descripcion = this.experiencia.descripcion;
      this.aneos = this.experiencia.aneos;
      this.direccion = this.experiencia.direccion;      
    }
  }

  onUpdateExperiencia(): void {
    if (this.formExperiencia.valid) {      
      if(this.experiencia != null || this.experiencia != undefined){
        
        let experienciaUpdate = this.experiencia;

        experienciaUpdate.nombre_empresa = this.formExperiencia.get("nombre_empresa")?.value;
        experienciaUpdate.descripcion = this.formExperiencia.get("descripcion")?.value;
        experienciaUpdate.aneos = this.formExperiencia.get("aneos")?.value;
        experienciaUpdate.direccion = this.formExperiencia.get("direccion")?.value;
  
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
      this.ImageService.url_logo_experiencia,
      this.AuthService.logeado.getId_persona()
    );
  
    this.ExperienciasService.create(experienciaNew).subscribe();
    this.ImageService.url_logo_experiencia = '';
    
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

  //Alta de Experiecia
  subirLogo_AltaExperiencia($event:any){
    let file: any = $event.target.files[0];   
    
    this.loading = true;
    this.ImageService.uploadExperienciaLogoAlta(file);
    setTimeout(() => {
      this.loading = false;      
    }, 2000); 
  }

  //Modificacion de Experiencia
  subirLogo_ModificacionExperiencia($event:any){
    const file = $event.target.files[0];
    this.loading = true;
    this.ImageService.uploadExperienciaUpdate(file,this.experiencia);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  
}
