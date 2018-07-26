import { TestBed, inject } from '@angular/core/testing';

import { EntriesService } from './entries-from-journal.service';

describe('EntriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntriesService]
    });
  });

  it('should be created', inject([EntriesService], (service: EntriesService) => {
    expect(service).toBeTruthy();
  }));
});
