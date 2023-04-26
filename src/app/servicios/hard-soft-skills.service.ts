import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSoftSkill } from '../clases/hard-soft-skill';

@Injectable({
  providedIn: 'root'
})
export class HardSoftSkillsService {

  private url: string = "http://localhost:8080/api/hss/";

  constructor(
    private http: HttpClient
  ) { }

  //Listar
  getAll(): Observable<HardSoftSkill>{
    return this.http.get<HardSoftSkill>(this.url+"listar");
  }

  //Traer HSS
  getUsuario(id:number):Observable<HardSoftSkill>{
    return this.http.get<HardSoftSkill>(this.url+"listar/"+id);
  }

  //Alta 
  create(hss: HardSoftSkill): Observable<HardSoftSkill>{
    return this.http.post<HardSoftSkill>(this.url+"alta", hss);
  }

  //Baja
  delete(id: number):Observable<HardSoftSkill>{
    return this.http.delete<HardSoftSkill>(this.url+"baja/"+id);
  }

  //Modificar
  update(hss: HardSoftSkill): Observable<HardSoftSkill>{
    return this.http.put<HardSoftSkill>(this.url+"modificar", hss);
  }
}
