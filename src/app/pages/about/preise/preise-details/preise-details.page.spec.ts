import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreiseDetailsPage } from './preise-details.page';

describe('PreiseDetailsPage', () => {
  let component: PreiseDetailsPage;
  let fixture: ComponentFixture<PreiseDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreiseDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreiseDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
