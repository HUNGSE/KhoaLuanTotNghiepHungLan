import { TestBed } from '@angular/core/testing';

import { DetailProjectService } from './detail-project.service';

describe('DetailProjectService', () => {
  let service: DetailProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
