import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HardSoftSkill } from 'src/app/clases/hard-soft-skill';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSoftSkillsService } from 'src/app/servicios/hard-soft-skills.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-edit-hss',
  templateUrl: './edit-hss.component.html',
  styleUrls: ['./edit-hss.component.css']
})
export class EditHssComponent implements OnInit {

  @Input() hss: HardSoftSkill | any;
  @Output() cambios = new EventEmitter();

  public formHSS: FormGroup;

  titulo: string = "";
  detalle: string = "";
  porcentaje: string = "";

  estadoFormAlta: boolean = true;
  loading = false;

  constructor(
    private HardSoftSkillsService: HardSoftSkillsService,
    private NgbModal: NgbModal,
    private FormBuilder: FormBuilder,
    private AuthService:AuthService
  ) {
    this.formHSS = this.FormBuilder.group({
      titulo: ['', [Validators.required]],
      detalle: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.hss != null || this.hss != undefined) {
      this.titulo = this.hss.titulo;
      this.detalle = this.hss.detalle;
      this.porcentaje = this.hss.porcentaje;
      this.setPorcentajeRange(this.hss.porcentaje);
    }
  }

  onUpdateHSS(): void {
    if (this.formHSS.valid) {
      if (this.estadoFormAlta != true) {
        let hssUpdate = this.hss;

        hssUpdate.titulo = this.formHSS.get("titulo")?.value;
        hssUpdate.detalle = this.formHSS.get("detalle")?.value;
        hssUpdate.porcentaje = this.formHSS.get("porcentaje")?.value;

        this.HardSoftSkillsService.update(hssUpdate).subscribe();

        this.modalClose();
      }else{
        this.onAddHSS();
      }
    }
  }

  onAddHSS():void{
    let hssNew: HardSoftSkill = new HardSoftSkill(
      this.formHSS.get("titulo")?.value,
      this.formHSS.get("detalle")?.value,
      this.formHSS.get("porcentaje")?.value,
      this.AuthService.logeado.getId_persona()
    );

    this.HardSoftSkillsService.create(hssNew).subscribe();

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

  setPorcentajeRange(porcentaje: string): void {
    let auxPorcentaje = <HTMLInputElement>document.getElementById('porcentaje');
    auxPorcentaje.value = porcentaje;
  }

  captureRange(): void {
    let porcentaje = <HTMLInputElement>document.getElementById('porcentaje');

    this.porcentaje = porcentaje.value;
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }
}
