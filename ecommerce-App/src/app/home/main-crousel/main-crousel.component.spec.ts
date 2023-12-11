import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCrouselComponent } from './main-crousel.component';

describe('MainCrouselComponent', () => {
  let component: MainCrouselComponent;
  let fixture: ComponentFixture<MainCrouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCrouselComponent]
    });
    fixture = TestBed.createComponent(MainCrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
