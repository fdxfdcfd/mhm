/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApacheLinkService } from './apache-link.service';

describe('ApacheLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApacheLinkService]
    });
  });

  it('should ...', inject([ApacheLinkService], (service: ApacheLinkService) => {
    expect(service).toBeTruthy();
  }));
});
