/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductTypeService } from './product-type.service';

describe('ProductTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductTypeService]
    });
  });

  it('should ...', inject([ProductTypeService], (service: ProductTypeService) => {
    expect(service).toBeTruthy();
  }));
});
