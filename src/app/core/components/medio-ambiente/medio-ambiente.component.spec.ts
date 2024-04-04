import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioAmbienteComponent } from './medio-ambiente.component';

describe('MedioAmbienteComponent', () => {
  let component: MedioAmbienteComponent;
  let fixture: ComponentFixture<MedioAmbienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedioAmbienteComponent]
    });
    fixture = TestBed.createComponent(MedioAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
