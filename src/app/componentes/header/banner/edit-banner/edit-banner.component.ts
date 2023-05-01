import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {

  @Input () persona : Persona | any;

  url_banner:string = "";
  loading = false;
  
  constructor(
    private ImageService: ImageService
  ) { }

  ngOnInit(): void {
  }

  uploadImage($event:any){
    const file = $event.target.files[0];
    this.loading = true;
    this.ImageService.uploadBannerPerfil(file, this.persona);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
