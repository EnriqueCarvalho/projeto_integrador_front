import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEspacosComponent } from './cadastro-espacos.component';

describe('CadastroEspacosComponent', () => {
  let component: CadastroEspacosComponent;
  let fixture: ComponentFixture<CadastroEspacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEspacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEspacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
