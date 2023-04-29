import { Component, Input, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/servicios/personas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/clases/persona';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  @Input () persona: Persona | any;

  public formPersona: FormGroup;

  titulo:any = "";
  nombre:any = "";
  apellido:any = "";
  
  constructor(
    private PersonasService: PersonasService,
    private NgbModal: NgbModal,
    private FormBuilder: FormBuilder
  ) { 
    this.formPersona = this.FormBuilder.group({
      titulo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.titulo = this.persona.titulo;
    this.nombre = this.persona.nombre;
    this.apellido = this.persona.apellido;
  }

  onUpdatePersona():void{
    if(this.formPersona.valid){
      let personaUpdate = this.persona;

      personaUpdate.titulo = this.formPersona.get("titulo")?.value;
      personaUpdate.nombre = this.formPersona.get("nombre")?.value;
      personaUpdate.apellido = this.formPersona.get("apellido")?.value;

      this.PersonasService.update(personaUpdate).subscribe();

      this.modalClose();
    }
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }
}
