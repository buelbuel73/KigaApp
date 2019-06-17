import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsPage } from './tipps.page';

describe('TippsPage', () => {
  let component: TippsPage;
  let fixture: ComponentFixture<TippsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TippsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
