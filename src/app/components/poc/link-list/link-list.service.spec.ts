import { TestBed } from '@angular/core/testing';

import { LinkListService } from './link-list.service';

describe('LinkListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkListService = TestBed.get(LinkListService);
    expect(service).toBeTruthy();
  });
});
