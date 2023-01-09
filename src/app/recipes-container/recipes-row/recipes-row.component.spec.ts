import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesRowComponent } from './recipes-row.component';

describe('RecipesRowComponent', () => {
  let component: RecipesRowComponent;
  let fixture: ComponentFixture<RecipesRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
