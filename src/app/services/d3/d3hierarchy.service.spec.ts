import { TestBed, inject } from '@angular/core/testing';

import { D3hierarchyService } from './d3hierarchy.service';

describe('D3hierarchyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [D3hierarchyService]
    });
  });

  it('should be created', inject([D3hierarchyService], (service: D3hierarchyService) => {
    expect(service).toBeTruthy();
  }));
});
