import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngebotePage } from './angebote.page';

describe('AngebotePage', () => {
  let component: AngebotePage;
  let fixture: ComponentFixture<AngebotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngebotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngebotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
