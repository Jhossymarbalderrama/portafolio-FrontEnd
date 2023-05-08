import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RedesSociales } from '../clases/redes-sociales';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialesService {

  // private url: string = "http://localhost:8080/api/redessociales/";
  private url: string = "https://portafolio-backend-balderrama.onrender.com/api/usuarios/";

  constructor(
    private http: HttpClient
  ) { }

  //Listar
  getAll(): Observable<RedesSociales>{
    return this.http.get<RedesSociales>(this.url+"listar");
  }


  //Alta 
  create(redesSociales: RedesSociales): Observable<RedesSociales>{
    return this.http.post<RedesSociales>(this.url+"alta", redesSociales);
  }

  //Baja
  delete(id: number):Observable<RedesSociales>{
    return this.http.delete<RedesSociales>(this.url+"baja/"+id);
  }

  //Modificar
  update(redesSociales: RedesSociales): Observable<RedesSociales>{
    return this.http.put<RedesSociales>(this.url+"modificar", redesSociales);
  }
}
