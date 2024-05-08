import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoPageComponent } from './tiempo-page.component';

describe('TiempoPageComponent', () => {
  let component: TiempoPageComponent;
  let fixture: ComponentFixture<TiempoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiempoPageComponent]
    });
    fixture = TestBed.createComponent(TiempoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
