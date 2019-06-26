/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BedService } from './bed.service';

describe('Service: Bed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BedService]
    });
  });

  it('should ...', inject([BedService], (service: BedService) => {
    expect(service).toBeTruthy();
  }));
});
