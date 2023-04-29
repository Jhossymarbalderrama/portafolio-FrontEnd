import { Component, Input, OnInit } from '@angular/core';
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

  public formPersona: FormGroup;
  sobre_mi:any = "";
  
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
    this.sobre_mi = this.persona.sobre_mi;
  }

  onUpdatePersona():void{
    if(this.formPersona.valid){
      let personaUpdate = this.persona;

      personaUpdate.sobre_mi = this.formPersona.get("sobre_mi")?.value;

      this.PersonasService.update(personaUpdate).subscribe();
      this.modalClose();
    }
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }
}
