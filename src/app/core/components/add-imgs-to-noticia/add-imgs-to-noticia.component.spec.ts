import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgsToNoticiaComponent } from './add-imgs-to-noticia.component';

describe('AddImgsToNoticiaComponent', () => {
  let component: AddImgsToNoticiaComponent;
  let fixture: ComponentFixture<AddImgsToNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddImgsToNoticiaComponent]
    });
    fixture = TestBed.createComponent(AddImgsToNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
