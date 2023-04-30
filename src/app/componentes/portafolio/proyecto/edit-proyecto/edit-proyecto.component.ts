import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { Proyecto } from 'src/app/clases/proyecto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  @Input () proyecto: Proyecto | any;
  @Output () cambios = new EventEmitter();

  public formProyecto: FormGroup;

  nombre_proyecto:string = "";
  descripcion:string = "";
  sistema:string = "";

  estadoFormAlta: boolean = true;
  loading = false;

  constructor(
    private ProyectosService:ProyectosService,
    private NgbModal: NgbModal,
    private FormBuilder: FormBuilder,
    private AuthService:AuthService
  ) {
    this.formProyecto = this.FormBuilder.group({
      nombre_proyecto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      sistema: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if(this.proyecto != null || this.proyecto != undefined){
      this.nombre_proyecto = this.proyecto.nombre_proyecto;
      this.descripcion = this.proyecto.descripcion;
      this.sistema = this.proyecto.sistema;

      this.estadoFormAlta = false;
    }
  }

  onUpdateProyecto():void{
    if(this.formProyecto.valid){
      if(this.estadoFormAlta != true){
        let proyectoUpdate = this.proyecto;

        proyectoUpdate.nombre_proyecto = this.formProyecto.get("nombre_proyecto")?.value;
        proyectoUpdate.descripcion = this.formProyecto.get("descripcion")?.value;
        proyectoUpdate.sistema = this.formProyecto.get("sistema")?.value;
  
        this.ProyectosService.update(proyectoUpdate).subscribe();
  
        this.modalClose();
      }else{
        this.onAddProyect();
      }
    }
  }


  onAddProyect():void{
    let proyectoUpdate: Proyecto = new Proyecto(
      this.formProyecto.get("nombre_proyecto")?.value,
      this.formProyecto.get("descripcion")?.value,
      this.formProyecto.get("sistema")?.value,
      this.AuthService.logeado.getId_persona()
    );    

    this.ProyectosService.create(proyectoUpdate).subscribe();

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
