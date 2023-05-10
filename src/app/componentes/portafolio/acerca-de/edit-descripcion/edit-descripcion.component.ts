import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/clases/persona';
import { PersonasService } from 'src/app/servicios/personas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-descripcion',
  templateUrl: './edit-descripcion.component.html',
  styleUrls: ['./edit-descripcion.component.css']
})
export class EditDescripcionComponent implements OnInit {

  @Input () persona: Persona | any;
  @Output () cambios = new EventEmitter();
  
  public formPersona: FormGroup;
  public sobre_mi:any = "";
  public estadoFormAlta: boolean = true;
  public loading = false;

  constructor(
    private PersonasService: PersonasService,
    private NgbModal: NgbModal,
    private FormBuilder: FormBuilder
  ) { 
    this.formPersona = this.FormBuilder.group({
      sobre_mi: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if(this.persona != null || this.persona != undefined){
      this.sobre_mi = this.persona.sobre_mi;
    }
  }

  onUpdatePersona():void{
    if(this.formPersona.valid){
      if(this.estadoFormAlta != true){
        let personaUpdate = this.persona;

        personaUpdate.sobre_mi = this.formPersona.get("sobre_mi")?.value;
  
        this.PersonasService.update(personaUpdate).subscribe();
        this.procesoLoading();
      }else{
        this.onAddSobre_mi();
      }
    }
  }

  onAddSobre_mi():void{
    let personaUpdate = this.persona;

    personaUpdate.sobre_mi = this.formPersona.get("sobre_mi")?.value;

    this.PersonasService.update(personaUpdate).subscribe();
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
