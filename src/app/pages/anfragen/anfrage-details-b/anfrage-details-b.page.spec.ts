import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfrageDetailsBPage } from './anfrage-details-b.page';

describe('AnfrageDetailsBPage', () => {
  let component: AnfrageDetailsBPage;
  let fixture: ComponentFixture<AnfrageDetailsBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfrageDetailsBPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfrageDetailsBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
