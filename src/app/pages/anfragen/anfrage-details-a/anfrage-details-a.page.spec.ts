import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfrageDetailsAPage } from './anfrage-details-a.page';

describe('AnfrageDetailsAPage', () => {
  let component: AnfrageDetailsAPage;
  let fixture: ComponentFixture<AnfrageDetailsAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfrageDetailsAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfrageDetailsAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
