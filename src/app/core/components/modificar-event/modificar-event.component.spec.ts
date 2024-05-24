import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEventComponent } from './modificar-event.component';

describe('ModificarEventComponent', () => {
  let component: ModificarEventComponent;
  let fixture: ComponentFixture<ModificarEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarEventComponent]
    });
    fixture = TestBed.createComponent(ModificarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
