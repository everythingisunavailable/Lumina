import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongSliderComponent } from './long-slider.component';

describe('LongSliderComponent', () => {
  let component: LongSliderComponent;
  let fixture: ComponentFixture<LongSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
