/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantbedService } from './plantbed.service';

describe('Service: Plantbed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantbedService]
    });
  });

  it('should ...', inject([PlantbedService], (service: PlantbedService) => {
    expect(service).toBeTruthy();
  }));
});
