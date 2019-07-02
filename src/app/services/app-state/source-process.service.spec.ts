/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SourceProcessService } from './source-process.service';

describe('Service: SourceProcess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceProcessService]
    });
  });

  it('should ...', inject([SourceProcessService], (service: SourceProcessService) => {
    expect(service).toBeTruthy();
  }));
});
