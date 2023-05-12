import { Component, OnInit } from '@angular/core';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faFlag:any= faFlag;
  constructor() { }

  ngOnInit(): void {
  }

}
