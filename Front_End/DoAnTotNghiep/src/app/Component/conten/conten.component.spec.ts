import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenComponent } from './conten.component';

describe('ContenComponent', () => {
  let component: ContenComponent;
  let fixture: ComponentFixture<ContenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
