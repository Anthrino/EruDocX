import { TestBed, inject } from '@angular/core/testing';

import { QAService } from './qa.service';

describe('QAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QAService]
    });
  });

  it('should be created', inject([QAService], (service: QAService) => {
    expect(service).toBeTruthy();
  }));
});
