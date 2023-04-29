import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/clases/educacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionesService } from 'src/app/servicios/educaciones.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  @Input () educacion: Educacion | any;

  public formEducacion: FormGroup;

  nombre_establecimiento: string = "";
  titulo: string = "";
  descripcion: string = "";
  aneos: string = "";
  direccion: string = "";
  url_logo: string = "";
  
  constructor(
    private EducacionesService:EducacionesService,
    private NgbModal: NgbModal,
    private FormBuilder: FormBuilder
  ) {
    this.formEducacion = this.FormBuilder.group({
      nombre_establecimiento: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      aneos: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      url_logo: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.nombre_establecimiento = this.educacion.nombre_establecimiento;
    this.titulo = this.educacion.titulo;
    this.descripcion = this.educacion.descripcion;
    this.aneos = this.educacion.aneos;
    this.direccion = this.educacion.direccion;
    this.url_logo = this.educacion.url_logo;
  }

  onUpdatePersona():void{
    if(this.formEducacion.valid){
      let educacionUpdate = this.educacion;

      educacionUpdate.nombre_establecimiento = this.formEducacion.get("nombre_establecimiento")?.value;
      educacionUpdate.titulo = this.formEducacion.get("titulo")?.value;
      educacionUpdate.descripcion = this.formEducacion.get("descripcion")?.value;
      educacionUpdate.aneos = this.formEducacion.get("aneos")?.value;
      educacionUpdate.direccion = this.formEducacion.get("direccion")?.value;
      educacionUpdate.url_logo = this.formEducacion.get("url_logo")?.value;

      this.EducacionesService.update(educacionUpdate).subscribe();

      this.modalClose();
    }
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }
}
