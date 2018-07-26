import { TestBed, inject } from '@angular/core/testing';

import { EntriesFromJournalService } from './entries-from-journal.service';

describe('EntriesFromJournalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntriesFromJournalService]
    });
  });

  it('should be created', inject([EntriesFromJournalService], (service: EntriesFromJournalService) => {
    expect(service).toBeTruthy();
  }));
});
