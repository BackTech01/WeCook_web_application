import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetariesComponent } from './recetaries.component';

describe('RecetariesComponent', () => {
  let component: RecetariesComponent;
  let fixture: ComponentFixture<RecetariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
