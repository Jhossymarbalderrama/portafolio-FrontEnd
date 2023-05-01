import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/clases/educacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionesService } from 'src/app/servicios/educaciones.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/servicios/auth.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  @Input() educacion: Educacion | any;
  @Output() cambios = new EventEmitter();

  public formEducacion: FormGroup;

  nombre_establecimiento: string = "";
  titulo: string = "";
  descripcion: string = "";
  aneos: string = "";
  direccion: string = "";
  url_logo: string = "";

  estadoFormAlta: boolean = true;
  loading = false;

  constructor(
    private EducacionesService: EducacionesService,
    private NgbModal: NgbModal,
    private FormBuilder: FormBuilder,
    private AuthService:AuthService,
    public ImageService:ImageService
  ) {
    this.formEducacion = this.FormBuilder.group({
      nombre_establecimiento: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      aneos: ['', [Validators.required]],
      direccion: ['', [Validators.required]]     
    });
  }

  ngOnInit(): void {
    if (this.educacion != null || this.educacion != undefined) {
      this.nombre_establecimiento = this.educacion.nombre_establecimiento;
      this.titulo = this.educacion.titulo;
      this.descripcion = this.educacion.descripcion;
      this.aneos = this.educacion.aneos;
      this.direccion = this.educacion.direccion;
      // this.url_logo = this.educacion.url_logo;
    }
  }

  onUpdatePersona(): void {
    if (this.formEducacion.valid) {
      if (this.educacion != null || this.educacion != undefined) {
        let educacionUpdate = this.educacion;

        educacionUpdate.nombre_establecimiento = this.formEducacion.get("nombre_establecimiento")?.value;
        educacionUpdate.titulo = this.formEducacion.get("titulo")?.value;
        educacionUpdate.descripcion = this.formEducacion.get("descripcion")?.value;
        educacionUpdate.aneos = this.formEducacion.get("aneos")?.value;
        educacionUpdate.direccion = this.formEducacion.get("direccion")?.value;
        

        this.EducacionesService.update(educacionUpdate).subscribe();

        this.modalClose();
      }else{
        this.onAddEducacion();
      }
    }
  }

  onAddEducacion():void{
    let educacionNew: Educacion = new Educacion(
      this.formEducacion.get("nombre_establecimiento")?.value,
      this.formEducacion.get("titulo")?.value,
      this.formEducacion.get("descripcion")?.value,
      this.formEducacion.get("aneos")?.value,
      this.formEducacion.get("direccion")?.value,
      this.ImageService.url_logo_educacion,
      this.AuthService.logeado.getId_persona()
    );

    this.EducacionesService.create(educacionNew).subscribe();
    this.ImageService.url_logo_educacion = '';

    this.cambiosEducaciones();
    this.procesoLoading();
  }

  procesoLoading(){
    this.loading = true;
    
    setTimeout(() => {
      this.loading = false;
      this.modalClose()
    }, 1300);
  }
  
  cambiosEducaciones(){
    this.cambios.emit(true);
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }

  //Alta de Experiecia
  subirLogo_AltaEducacion($event:any){
    let file: any = $event.target.files[0];   
    
    this.loading = true;
    this.ImageService.uploadEducacionLogoAlta(file);
    setTimeout(() => {
      this.loading = false;      
    }, 2000); 
  }

  //Modificacion de Experiencia
  subirLogo_ModificacionEducacion($event:any){
    const file = $event.target.files[0];
    this.loading = true;
    this.ImageService.uploadEducacionUpdate(file,this.educacion);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
