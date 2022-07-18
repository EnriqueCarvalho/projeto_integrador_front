import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasQuadraComponent } from './reservas-quadra.component';

describe('ReservasQuadraComponent', () => {
  let component: ReservasQuadraComponent;
  let fixture: ComponentFixture<ReservasQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
