import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsDetailsPage } from './tipps-details.page';

describe('TippsDetailsPage', () => {
  let component: TippsDetailsPage;
  let fixture: ComponentFixture<TippsDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TippsDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
