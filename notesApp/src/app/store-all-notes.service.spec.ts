import { TestBed } from '@angular/core/testing';

import { StoreAllNotesService } from './store-all-notes.service';

describe('StoreAllNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreAllNotesService = TestBed.get(StoreAllNotesService);
    expect(service).toBeTruthy();
  });
});
