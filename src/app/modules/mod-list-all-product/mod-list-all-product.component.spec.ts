/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModListAllProductComponent } from './mod-list-all-product.component';

describe('ModListAllProductComponent', () => {
  let component: ModListAllProductComponent;
  let fixture: ComponentFixture<ModListAllProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModListAllProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModListAllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
