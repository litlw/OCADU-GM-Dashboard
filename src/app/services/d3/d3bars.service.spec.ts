import { TestBed, inject } from '@angular/core/testing';

import { D3barsService } from './d3bars.service';

describe('D3barsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [D3barsService]
    });
  });

  it('should be created', inject([D3barsService], (service: D3barsService) => {
    expect(service).toBeTruthy();
  }));
});
