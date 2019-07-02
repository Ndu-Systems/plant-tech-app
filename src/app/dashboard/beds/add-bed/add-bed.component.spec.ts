/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddBedComponent } from './add-bed.component';

describe('AddBedComponent', () => {
  let component: AddBedComponent;
  let fixture: ComponentFixture<AddBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
