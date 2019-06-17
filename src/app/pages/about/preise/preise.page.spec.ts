import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreisePage } from './preise.page';

describe('PreisePage', () => {
  let component: PreisePage;
  let fixture: ComponentFixture<PreisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
