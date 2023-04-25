import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {

  public formLogin: FormGroup;
  private listaUsuarios: any = [];
  private listaAux: any = [];
  constructor(
    private Router: Router,
    private FormBuilder: FormBuilder,
    private UsuariosService: UsuariosService,
    private AuthService: AuthService
  ) {
    this.formLogin = this.FormBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]]
    });

    this.UsuariosService.getAll().subscribe((data: Usuario | any) => {
      this.listaAux = data;
      this.getAllUsuarios();
    });
  }

  ngOnInit(): void {

  }

  onRegistro(): void {
    this.Router.navigateByUrl("registro");
  }

  onLogin(): void {
    if (this.formLogin.valid) {
      console.log(this.listaAux);
      if (this.usuarioExist()) {
        console.log("Se encontro al usuario!!");
        console.log("Logeando...");
        this.Router.navigateByUrl("portafolio");
      }
    }
  }

  getAllUsuarios(): void {
    for (const usuario of this.listaAux) {
      this.listaUsuarios.push(usuario);
    }
  }

  usuarioExist(): boolean {
    let rta: boolean = false;

    
    this.listaUsuarios.forEach((usuario : Usuario | any) => {
      if(usuario.usuario == this.formLogin.get("usuario")?.value && 
         usuario.contraseña == this.formLogin.get("contraseña")?.value){
          
          this.AuthService.logeado = usuario;
          rta = true;          
      }
    });

    return rta;
  }

  acceso():void{
    this.AuthService.logeado = new Usuario("jhossymarbalderrama@gmail.com","BalderramaJhossy159");
    this.Router.navigateByUrl("portafolio");
  }
}
