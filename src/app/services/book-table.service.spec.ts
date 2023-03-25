import { TestBed } from '@angular/core/testing';

import { BookTableService } from './book-table.service';

describe('BookTableService', () => {
  let service: BookTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
