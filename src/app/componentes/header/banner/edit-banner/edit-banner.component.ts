import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {

  url_banner:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
