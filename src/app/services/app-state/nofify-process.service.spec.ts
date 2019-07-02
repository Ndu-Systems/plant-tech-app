/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotifyProcessService } from './nofify-process.service';

describe('Service: NofifyProcess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotifyProcessService]
    });
  });

  it('should ...', inject([NotifyProcessService], (service: NotifyProcessService) => {
    expect(service).toBeTruthy();
  }));
});
