import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-foto-perfil',
  templateUrl: './edit-foto-perfil.component.html',
  styleUrls: ['./edit-foto-perfil.component.css']
})
export class EditFotoPerfilComponent implements OnInit {

  url_foto: string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
