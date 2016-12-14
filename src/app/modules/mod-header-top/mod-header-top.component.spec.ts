/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModHeaderTopComponent } from './mod-header-top.component';

describe('ModHeaderTopComponent', () => {
  let component: ModHeaderTopComponent;
  let fixture: ComponentFixture<ModHeaderTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModHeaderTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModHeaderTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
