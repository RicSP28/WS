import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosPage } from './insumos.page';

describe('InsumosPage', () => {
  let component: InsumosPage;
  let fixture: ComponentFixture<InsumosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
