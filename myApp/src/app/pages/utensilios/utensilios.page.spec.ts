import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtensiliosPage } from './utensilios.page';

describe('UtensiliosPage', () => {
  let component: UtensiliosPage;
  let fixture: ComponentFixture<UtensiliosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtensiliosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtensiliosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
