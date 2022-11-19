import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetarieRecipesComponent } from './recetarie-recipes.component';

describe('RecetarieRecipesComponent', () => {
  let component: RecetarieRecipesComponent;
  let fixture: ComponentFixture<RecetarieRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetarieRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetarieRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
