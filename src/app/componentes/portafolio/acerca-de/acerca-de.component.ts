import { Component, OnInit } from '@angular/core';
//import { faEdit } from '@fortawesome/free-regular-svg-icons';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/servicios/auth.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  faEdit: any = faEdit;
  faWindowClose: any = faTimesCircle;
  
  constructor(
    public AuthService:AuthService
  ) { }

  ngOnInit(): void {
  }

}
