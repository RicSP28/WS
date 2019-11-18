import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeFornecedoresPage } from './cadastro-de-fornecedores.page';

describe('CadastroDeFornecedoresPage', () => {
  let component: CadastroDeFornecedoresPage;
  let fixture: ComponentFixture<CadastroDeFornecedoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeFornecedoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeFornecedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
