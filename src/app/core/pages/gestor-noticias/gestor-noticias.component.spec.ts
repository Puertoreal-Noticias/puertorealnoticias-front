import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorNoticiasComponent } from './gestor-noticias.component';

describe('GestorNoticiasComponent', () => {
  let component: GestorNoticiasComponent;
  let fixture: ComponentFixture<GestorNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestorNoticiasComponent]
    });
    fixture = TestBed.createComponent(GestorNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
