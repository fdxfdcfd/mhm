/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AboutResolveService } from './about-resolve.service';

describe('AboutResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutResolveService]
    });
  });

  it('should ...', inject([AboutResolveService], (service: AboutResolveService) => {
    expect(service).toBeTruthy();
  }));
});
