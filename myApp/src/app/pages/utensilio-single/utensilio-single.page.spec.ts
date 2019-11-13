import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtensilioSinglePage } from './utensilio-single.page';

describe('UtensilioSinglePage', () => {
  let component: UtensilioSinglePage;
  let fixture: ComponentFixture<UtensilioSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtensilioSinglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtensilioSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
