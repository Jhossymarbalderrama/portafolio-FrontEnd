import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 

  @Input () bannerEstado:boolean | undefined;

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }
}
