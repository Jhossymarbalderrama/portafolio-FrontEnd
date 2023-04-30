import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../clases/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  // private url: string = "http://localhost:8080/api/personas/";
  private url: string = "https://portafolio-backend-balderrama.onrender.com/api/personas/";

  constructor(
    private http: HttpClient
  ) { }

  //Listar
  getAll(): Observable<Persona>{
    return this.http.get<Persona>(this.url+"listar");
  }

  //Traer Persona
  getPersona(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.url+"listar/"+id);
  }

  //Alta 
  create(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.url+"alta", persona);
  }

  //Baja
  delete(id: number):Observable<Persona>{
    return this.http.delete<Persona>(this.url+"baja/"+id);
  }

  //Modificar
  update(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(this.url+"modificar", persona);
  }
}
