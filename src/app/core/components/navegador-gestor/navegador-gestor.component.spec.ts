import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorGestorComponent } from './navegador-gestor.component';

describe('NavegadorGestorComponent', () => {
  let component: NavegadorGestorComponent;
  let fixture: ComponentFixture<NavegadorGestorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegadorGestorComponent]
    });
    fixture = TestBed.createComponent(NavegadorGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
