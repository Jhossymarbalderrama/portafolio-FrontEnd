import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-card-registro',
  templateUrl: './card-registro.component.html',
  styleUrls: ['./card-registro.component.css']
})
export class CardRegistroComponent implements OnInit {

  public formRegistro: FormGroup; 

  constructor(
    private Router: Router,
    private FormBuilder: FormBuilder,
    private UsuariosService: UsuariosService
  ) { 

    this.formRegistro = this.FormBuilder.group({
      email: ['',[Validators.required,Validators.email,Validators.minLength(6)]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      reingreso_pass: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  onLogin():void{
      this.Router.navigateByUrl("login");
  }

  onRegister(){    
    if(this.formRegistro.valid &&
      this.formRegistro.get("password")?.value ==
      this.formRegistro.get("reingreso_pass")?.value){
        
        // console.log("Formulario Validado");
        // console.log("creando peticion de alta de usuario nuevo...");

        //let usuario: Usuario = new Usuario("","");

        let usuario: any = {
          usuario: this.formRegistro.get("email")?.value,
          contraseña: this.formRegistro.get("password")?.value
        }

        //this.UsuariosService.create(usuario);
        this.UsuariosService.create(usuario).subscribe();
        console.log("Usuario dado de alta!!!");     
      setTimeout(() => {
      }, 2000);

      
    }
  }
}
