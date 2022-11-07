import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRecetariesComponent } from './dialog-recetaries.component';

describe('DialogRecetariesComponent', () => {
  let component: DialogRecetariesComponent;
  let fixture: ComponentFixture<DialogRecetariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRecetariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRecetariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
