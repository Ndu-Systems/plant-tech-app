/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotifyProcessService } from './notify-process.service';

describe('Service: NotifyProcess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotifyProcessService]
    });
  });

  it('should ...', inject([NotifyProcessService], (service: NotifyProcessService) => {
    expect(service).toBeTruthy();
  }));
});
