import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {


  constructor(
    private Router: Router,
    public AuthService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogin():void{
    this.Router.navigateByUrl('login');
  }
  
  onLogout():void{    
    let aux: any;
    this.AuthService.logeado = aux;
  }

  
}
