import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinrichtungPage } from './einrichtung.page';

describe('EinrichtungPage', () => {
  let component: EinrichtungPage;
  let fixture: ComponentFixture<EinrichtungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinrichtungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinrichtungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
