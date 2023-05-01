import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { AuthService } from 'src/app/servicios/auth.service';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonasService } from 'src/app/servicios/personas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-edit-foto-perfil',
  templateUrl: './edit-foto-perfil.component.html',
  styleUrls: ['./edit-foto-perfil.component.css']
})
export class EditFotoPerfilComponent implements OnInit {

  @Input () persona : Persona | any;

  url_foto: string ="";

  loading = false;
  constructor(
    private ImageService: ImageService,
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
    }, 2000);
  }
}
