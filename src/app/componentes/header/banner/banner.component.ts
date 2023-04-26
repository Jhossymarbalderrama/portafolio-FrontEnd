import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  faEdit: any = faEdit;
  
  constructor(
    public AuthService:AuthService,
    private NgbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModal(modal: any) {
    this.NgbModal.open(modal, { centered: true});
  }
  
  modalClose() {
    this.NgbModal.dismissAll();
  }
}
