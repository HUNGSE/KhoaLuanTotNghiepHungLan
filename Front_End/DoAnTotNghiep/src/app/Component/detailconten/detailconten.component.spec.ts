import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcontenComponent } from './detailconten.component';

describe('DetailcontenComponent', () => {
  let component: DetailcontenComponent;
  let fixture: ComponentFixture<DetailcontenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcontenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcontenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
