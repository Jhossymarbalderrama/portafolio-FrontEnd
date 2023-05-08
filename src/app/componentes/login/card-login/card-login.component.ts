import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {

  public formLogin: FormGroup;
  private listaUsuarios: any = [];
  private listaAux: any = [];

  public usuarioNoExist: boolean = false;
  public loading: boolean = false;

  constructor(
    private Router: Router,
    private FormBuilder: FormBuilder,
    private UsuariosService: UsuariosService,
    private AuthService: AuthService,
    private NgbModal: NgbModal
  ) {
    this.formLogin = this.FormBuilder.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]]
    });

    this.UsuariosService.getAll().subscribe((data: Usuario | any) => {
      this.listaAux = data;
      this.getAllUsuarios();
    });
  }

  ngOnInit(): void {

  }


  onLogin(): void {
    if (this.formLogin.valid) {

      let existeUsuario = this.usuarioExist(this.formLogin.get("usuario")?.value, this.formLogin.get("contraseña")?.value);
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        if (existeUsuario) {
          this.saveLogin();
          this.AuthService.estadoLogin = true;
          this.modalClose();
        } else {
          this.usuarioNoExist = true;
        }
      }, 1000);

    }
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }

  getAllUsuarios(): void {
    for (const usuario of this.listaAux) {
      this.listaUsuarios.push(usuario);
    }
  }

  usuarioExist(usuarioForm: string, contraseñaForm: string): boolean {
    let rta: boolean = false;


    for (const usuario of this.listaUsuarios) {
      if (usuario?.usuario === usuarioForm) {
        if (usuario?.contraseña === contraseñaForm) {
          rta = true;
          break
        } else {
          rta = false;
        }
      }
    }


    return rta;
  }


  // acceso(): void {
  //   this.AuthService.logeado = new Usuario("jhossymarbalderrama@gmail.com", "Balderrama159", 1, 1);
  //   this.AuthService.estadoLogin = true;
  //   this.modalClose();
  // }

  saveLogin() {
    let usuario: any = this.AuthService.logeado;
    let passwCodif = usuario.contraseña;

    usuario.contraseña = btoa(passwCodif);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
}
