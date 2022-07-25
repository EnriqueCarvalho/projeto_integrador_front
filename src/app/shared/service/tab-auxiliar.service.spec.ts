import { TestBed } from '@angular/core/testing';

import { TabAuxiliarService } from './tab-auxiliar.service';

describe('TabAuxiliarService', () => {
  let service: TabAuxiliarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabAuxiliarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
