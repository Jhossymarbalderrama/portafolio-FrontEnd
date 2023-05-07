import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(
    private Router: Router
  ) { }

  ngOnInit(): void {
  }
}
