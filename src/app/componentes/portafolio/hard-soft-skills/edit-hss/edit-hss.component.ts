import { Component, Input, OnInit } from '@angular/core';
import { HardSoftSkill } from 'src/app/clases/hard-soft-skill';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSoftSkillsService } from 'src/app/servicios/hard-soft-skills.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-hss',
  templateUrl: './edit-hss.component.html',
  styleUrls: ['./edit-hss.component.css']
})
export class EditHssComponent implements OnInit {

  @Input () hss: HardSoftSkill | any;

  public formHSS: FormGroup;

  titulo: string = "";
  detalle: string = "";
  porcentaje: string = "";
  // url_imagen: string = "";

  constructor(
    private HardSoftSkillsService: HardSoftSkillsService,
    private NgbModal: NgbModal,
    private FormBuilder: FormBuilder
  ) {
    this.formHSS = this.FormBuilder.group({
      titulo: ['', [Validators.required]],
      detalle: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.titulo = this.hss.titulo;
    this.detalle = this.hss.detalle;
    this.porcentaje = this.hss.porcentaje;
    this.setPorcentajeRange(this.hss.porcentaje);
  }

  setPorcentajeRange(porcentaje: string):void{
    let auxPorcentaje = <HTMLInputElement> document.getElementById('porcentaje');
    auxPorcentaje.value = porcentaje;
  }

  captureRange():void{
    let porcentaje = <HTMLInputElement> document.getElementById('porcentaje');

    this.porcentaje = porcentaje.value;    
  }

  onUpdateHSS():void{
    if(this.formHSS.valid){
      let hssUpdate = this.hss;

      hssUpdate.titulo = this.formHSS.get("titulo")?.value;
      hssUpdate.detalle = this.formHSS.get("detalle")?.value;
      hssUpdate.porcentaje = this.formHSS.get("porcentaje")?.value;

      this.HardSoftSkillsService.update(hssUpdate).subscribe();

      this.modalClose();
    }
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }
}
