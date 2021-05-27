import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcontenTypesComponent } from './detailconten-types.component';

describe('DetailcontenTypesComponent', () => {
  let component: DetailcontenTypesComponent;
  let fixture: ComponentFixture<DetailcontenTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcontenTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcontenTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
