import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngeboteDetailsPage } from './angebote-details.page';

describe('AngeboteDetailsPage', () => {
  let component: AngeboteDetailsPage;
  let fixture: ComponentFixture<AngeboteDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngeboteDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngeboteDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
