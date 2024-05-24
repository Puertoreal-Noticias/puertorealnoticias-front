import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerEventComponent } from './obtener-event.component';

describe('ObtenerEventComponent', () => {
  let component: ObtenerEventComponent;
  let fixture: ComponentFixture<ObtenerEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenerEventComponent]
    });
    fixture = TestBed.createComponent(ObtenerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
