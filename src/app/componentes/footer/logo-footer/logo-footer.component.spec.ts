import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFooterComponent } from './logo-footer.component';

describe('LogoFooterComponent', () => {
  let component: LogoFooterComponent;
  let fixture: ComponentFixture<LogoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
