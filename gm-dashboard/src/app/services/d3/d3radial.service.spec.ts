import { TestBed, inject } from '@angular/core/testing';

import { D3radialService } from './d3radial.service';

describe('D3radialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [D3radialService]
    });
  });

  it('should be created', inject([D3radialService], (service: D3radialService) => {
    expect(service).toBeTruthy();
  }));
});
