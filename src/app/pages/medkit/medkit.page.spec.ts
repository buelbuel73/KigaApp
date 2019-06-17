import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedkitPage } from './medkit.page';

describe('MedkitPage', () => {
  let component: MedkitPage;
  let fixture: ComponentFixture<MedkitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedkitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedkitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
