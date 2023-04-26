import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFotoPerfilComponent } from './edit-foto-perfil.component';

describe('EditFotoPerfilComponent', () => {
  let component: EditFotoPerfilComponent;
  let fixture: ComponentFixture<EditFotoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFotoPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFotoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
