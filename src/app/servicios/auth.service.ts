import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  public logeado: Usuario = new Usuario("jhossymarbalderrama","Jhossymarbalderrama159",1,1);    
   public estadoLogin: boolean = false;
  
  constructor(
    private UsuariosService: UsuariosService
  ) { 

    let aux: any = localStorage.getItem("usuario");
    let usuario : any = JSON.parse(aux);
    
    if(usuario){
      let passwCodif : any = usuario.contraseña;
      console.log(passwCodif);      

      usuario.contraseña = atob(passwCodif);
      let usuarioLogeado: Usuario = new Usuario(usuario.usuario, usuario.contraseña,usuario.id,usuario.id_persona);

      this.logeado = usuarioLogeado;
      this.estadoLogin = true;
    }
  }
}
