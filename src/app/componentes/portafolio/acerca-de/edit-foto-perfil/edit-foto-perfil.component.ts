import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { AuthService } from 'src/app/servicios/auth.service';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonasService } from 'src/app/servicios/personas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-foto-perfil',
  templateUrl: './edit-foto-perfil.component.html',
  styleUrls: ['./edit-foto-perfil.component.css']
})
export class EditFotoPerfilComponent implements OnInit {

  @Input () persona : Persona | any;

  public url_foto: string ="";
  public loading = false;

  constructor(
    private ImageService: ImageService,
    private NgbModal: NgbModal
  ) { 

  }

  ngOnInit(): void {
    
  }

  uploadImage($event:any){
    const file = $event.target.files[0];
    this.loading = true;
    this.ImageService.uploadImagePerfil(file, this.persona);
    setTimeout(() => {
      this.loading = false;
      this.modalClose();
    }, 1300);
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }
}
