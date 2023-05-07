import { Component, HostListener, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  bannerEstado: boolean = true;
  faArrowAltCircleUp: any = faArrowAltCircleUp;

  constructor(
  ) { }

  ngOnInit(): void {
  }


  isShow: any;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
