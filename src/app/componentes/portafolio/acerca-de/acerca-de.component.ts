import { Component, OnInit } from '@angular/core';
//import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  faEdit: any = faEdit;

  constructor(
    public AuthService:AuthService
  ) { }

  ngOnInit(): void {
  }

}
