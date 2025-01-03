import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosAmazonComponent } from './anuncios-amazon.component';

describe('AnunciosAmazonComponent', () => {
  let component: AnunciosAmazonComponent;
  let fixture: ComponentFixture<AnunciosAmazonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnunciosAmazonComponent]
    });
    fixture = TestBed.createComponent(AnunciosAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
