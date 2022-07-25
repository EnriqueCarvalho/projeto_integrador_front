import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHorariosComponent } from './cadastro-horarios.component';

describe('CadastroHorariosComponent', () => {
  let component: CadastroHorariosComponent;
  let fixture: ComponentFixture<CadastroHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroHorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
