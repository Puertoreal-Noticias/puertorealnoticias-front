import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionNoticiaComponent } from './seccion-noticia.component';

describe('SeccionNoticiaComponent', () => {
  let component: SeccionNoticiaComponent;
  let fixture: ComponentFixture<SeccionNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionNoticiaComponent]
    });
    fixture = TestBed.createComponent(SeccionNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
