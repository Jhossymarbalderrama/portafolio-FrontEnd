import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHssComponent } from './edit-hss.component';

describe('EditHssComponent', () => {
  let component: EditHssComponent;
  let fixture: ComponentFixture<EditHssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
