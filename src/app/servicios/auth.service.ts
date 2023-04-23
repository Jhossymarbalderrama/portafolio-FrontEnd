import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logeado: Usuario = new Usuario("","");  
  
  constructor() { }
}
