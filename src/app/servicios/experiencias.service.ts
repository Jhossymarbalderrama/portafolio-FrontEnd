import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../clases/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  private url: string = "http://localhost:8080/api/experiencias/";

  constructor(
    private http: HttpClient
  ) { }

  //Listar
  getAll(): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url+"listar");
  }

  //Traer Experiencia
  getUsuario(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url+"listar/"+id);
  }

  //Alta 
  create(experiencia: Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(this.url+"alta", experiencia);
  }

  //Baja
  delete(id: number):Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.url+"baja/"+id);
  }

  //Modificar
  update(experiencia: Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(this.url+"modificar", experiencia);
  }
}
