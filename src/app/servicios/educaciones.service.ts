import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../clases/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionesService {

  private url: string = "http://localhost:8080/api/educaciones/";
  // private url: string = "https://portafolio-backend-balderrama.onrender.com/api/educaciones/";

  constructor(
    private http: HttpClient
  ) { }

  //Listar
  getAll(): Observable<Educacion>{
    return this.http.get<Educacion>(this.url+"listar");
  }

  //Traer Educacion
  getUsuario(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url+"listar/"+id);
  }

  //Alta 
  create(educacion: Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(this.url+"alta", educacion);
  }

  //Baja
  delete(id: number):Observable<Educacion>{
    return this.http.delete<Educacion>(this.url+"baja/"+id);
  }

  //Modificar
  update(educacion: Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(this.url+"modificar", educacion);
  }
}
