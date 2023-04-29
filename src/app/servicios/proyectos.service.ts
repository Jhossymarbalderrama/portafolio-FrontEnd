import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../clases/proyecto';

@Injectable({
  providedIn: 'root'
})

export class ProyectosService {

  private url: string = "http://localhost:8080/api/proyectos/";

  

  constructor(
    private http: HttpClient
  ) { }


  //Listar
  getAll(): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url+"listar");
  }

  //Traer Proyecto
  getProyecto(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url+"listar/"+id);
  }

  //Alta 
  create(proyecto: Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(this.url+"alta", proyecto);
  }

  //Baja
  delete(id: number):Observable<Proyecto>{
    return this.http.delete<Proyecto>(this.url+"baja/"+id);
  }

  //Modificar
  update(proyecto: Proyecto): Observable<Proyecto>{
    return this.http.put<Proyecto>(this.url+"modificar", proyecto);
  }
}
