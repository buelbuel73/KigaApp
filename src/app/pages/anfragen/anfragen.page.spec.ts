import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfragenPage } from './anfragen.page';

describe('AnfragenPage', () => {
  let component: AnfragenPage;
  let fixture: ComponentFixture<AnfragenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfragenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfragenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
