/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NofifyProcessService } from './nofify-process.service';

describe('Service: NofifyProcess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NofifyProcessService]
    });
  });

  it('should ...', inject([NofifyProcessService], (service: NofifyProcessService) => {
    expect(service).toBeTruthy();
  }));
});
