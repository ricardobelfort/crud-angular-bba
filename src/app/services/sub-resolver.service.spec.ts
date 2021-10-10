import { TestBed } from '@angular/core/testing';

import { SubResolverService } from './sub-resolver.service';

describe('SubResolverService', () => {
  let service: SubResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
