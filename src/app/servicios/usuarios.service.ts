import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

   private url: string = "http://localhost:8080/api/usuarios/";
  //private url: string = "https://portafolio-backend-balderrama.onrender.com/api/usuarios/";

  constructor(
    private http: HttpClient
  ) { }

  //Listar
  getAll(): Observable<Usuario>{
    return this.http.get<Usuario>(this.url+"listar");
  }

  //Traer Usuario
  getUsuario(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(this.url+"listar/"+id);
  }

  //Alta 
  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url+"alta", usuario);
  }

  //Baja
  delete(id: number):Observable<Usuario>{
    return this.http.delete<Usuario>(this.url+"baja/"+id);
  }

  //Modificar
  update(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.url+"modificar", usuario);
  }
}
