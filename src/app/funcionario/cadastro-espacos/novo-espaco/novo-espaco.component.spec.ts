import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoEspacoComponent } from './novo-espaco.component';

describe('NovoEspacoComponent', () => {
  let component: NovoEspacoComponent;
  let fixture: ComponentFixture<NovoEspacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoEspacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoEspacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
