import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDescripcionComponent } from './edit-descripcion.component';

describe('EditDescripcionComponent', () => {
  let component: EditDescripcionComponent;
  let fixture: ComponentFixture<EditDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
