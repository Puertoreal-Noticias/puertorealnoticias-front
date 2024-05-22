import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPuertorealComponent } from './eventos-puertoreal.component';

describe('EventosPuertorealComponent', () => {
  let component: EventosPuertorealComponent;
  let fixture: ComponentFixture<EventosPuertorealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosPuertorealComponent]
    });
    fixture = TestBed.createComponent(EventosPuertorealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
