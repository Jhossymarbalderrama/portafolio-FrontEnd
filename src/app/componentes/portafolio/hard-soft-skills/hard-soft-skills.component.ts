import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {

  faEdit: any = faEdit;
  faWindowClose: any = faTimesCircle;
  
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
