import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { ImageService } from 'src/app/servicios/image.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private ImageService: ImageService,
    private NgbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  uploadImage($event:any){
    const file = $event.target.files[0];
    this.loading = true;
    this.ImageService.uploadBannerPerfil(file, this.persona);
    setTimeout(() => {
      this.loading = false;
      this.modalClose();
    }, 2000);
  }

  modalClose() {
    this.NgbModal.dismissAll();
  }
}
