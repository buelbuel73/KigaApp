import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfrageDetailsCPage } from './anfrage-details-c.page';

describe('AnfrageDetailsCPage', () => {
  let component: AnfrageDetailsCPage;
  let fixture: ComponentFixture<AnfrageDetailsCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfrageDetailsCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfrageDetailsCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
