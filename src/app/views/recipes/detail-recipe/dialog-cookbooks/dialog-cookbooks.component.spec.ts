import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCookbooksComponent } from './dialog-cookbooks.component';

describe('DialogCookbooksComponent', () => {
  let component: DialogCookbooksComponent;
  let fixture: ComponentFixture<DialogCookbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCookbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCookbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
