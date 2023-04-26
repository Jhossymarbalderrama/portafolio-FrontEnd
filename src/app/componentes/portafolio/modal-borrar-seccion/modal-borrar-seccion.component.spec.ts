import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBorrarSeccionComponent } from './modal-borrar-seccion.component';

describe('ModalBorrarSeccionComponent', () => {
  let component: ModalBorrarSeccionComponent;
  let fixture: ComponentFixture<ModalBorrarSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBorrarSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBorrarSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
