import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerNoticiaComponent } from './obtener-noticia.component';

describe('ObtenerNoticiaComponent', () => {
  let component: ObtenerNoticiaComponent;
  let fixture: ComponentFixture<ObtenerNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenerNoticiaComponent]
    });
    fixture = TestBed.createComponent(ObtenerNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
