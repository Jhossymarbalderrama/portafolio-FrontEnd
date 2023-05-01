import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, uploadString} from '@angular/fire/storage';
import { getDownloadURL } from '@firebase/storage';
import { ExperienciasService } from './experiencias.service';
import { PersonasService } from './personas.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url_logo_experiencia: any;
  url_logo_educacion: any;

  constructor(
    private Storage: Storage,
    private PersonasService: PersonasService,
    private ExperienciasService: ExperienciasService
  ) { }

  //ALTA DE FOTO PERFIL
  uploadImagePerfil(file: any, persona: any):void{
    const imgRef = ref(this.Storage, `images-perfil/${file.name}`);    
    uploadBytes(imgRef, file)
      .then(async response => {    
        persona.url_foto_perfil = await getDownloadURL(response.ref);

        this.PersonasService.update(persona).subscribe();
      })
      .catch(error => console.log(error));
  }

  //ALTA DE BANNER PERFIL
  uploadBannerPerfil(file: any, persona: any):void{
    const imgRef = ref(this.Storage, `images-banner/${file.name}`);    
    uploadBytes(imgRef, file)
      .then(async response => {    
        persona.url_banner_perfil = await getDownloadURL(response.ref);

        this.PersonasService.update(persona).subscribe();
      })
      .catch(error => console.log(error));
  }

  //ALTA DE LOGO EXPERIENCIA
  uploadExperienciaLogoAlta(file: any):void{
    const imgRef = ref(this.Storage, `images-logo-experiencia/${file.name}`);    
    uploadBytes(imgRef, file)
      .then(async response => {    
        this.url_logo_experiencia = await getDownloadURL(response.ref);
      })
      .catch(error => console.log(error));
  }

  //MODIFICACION DE LOGO EXPERIENCIA
  uploadExperienciaUpdate(file: any, experiencia: any):void{
    const imgRef = ref(this.Storage, `images-logo-experiencia/${file.name}`);    
    uploadBytes(imgRef, file)
      .then(async response => {    
        experiencia.url_logo = await getDownloadURL(response.ref);

        this.ExperienciasService.update(experiencia).subscribe();        
      })
      .catch(error => console.log(error));
  }

  //ALTA DE LOGO EDUCACION
  uploadEducacionLogoAlta(file: any):void{
    const imgRef = ref(this.Storage, `images-logo-educacion/${file.name}`);    
    uploadBytes(imgRef, file)
      .then(async response => {    
        this.url_logo_educacion = await getDownloadURL(response.ref);
      })
      .catch(error => console.log(error));
  }

  //MODIFICACION DE LOGO EXPERIENCIA
  uploadEducacionUpdate(file: any, educacion: any):void{
    const imgRef = ref(this.Storage, `images-logo-educacion/${file.name}`);    
    uploadBytes(imgRef, file)
      .then(async response => {    
        educacion.url_logo = await getDownloadURL(response.ref);

        this.ExperienciasService.update(educacion).subscribe();        
      })
      .catch(error => console.log(error));
  }
}

