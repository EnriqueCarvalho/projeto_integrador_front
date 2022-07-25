import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspacoComponent } from './editar-espaco.component';

describe('EditarEspacoComponent', () => {
  let component: EditarEspacoComponent;
  let fixture: ComponentFixture<EditarEspacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEspacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEspacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
