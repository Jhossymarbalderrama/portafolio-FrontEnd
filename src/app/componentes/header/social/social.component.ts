import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { RedesSociales } from 'src/app/clases/redes-sociales';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { RedesSocialesService } from 'src/app/servicios/redes-sociales.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {


  redSocial: any = [];

  constructor(
    private Router: Router,
    public AuthService: AuthService,
    private RedesSocialesService: RedesSocialesService,
    private NgbModal: NgbModal
  ) {
    this.RedesSocialesService.getAll().subscribe(datos => {
      this.redSocial = datos;      
    });
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.Router.navigateByUrl('login');
  }

  onLogout(): void {
    localStorage.removeItem("usuario");
    this.AuthService.estadoLogin = false;
  }
  
  openModal(modal: any) {
    this.NgbModal.open(modal, { centered: true });
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }
}
