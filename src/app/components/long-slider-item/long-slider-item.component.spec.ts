import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongSliderItemComponent } from './long-slider-item.component';

describe('LongSliderItemComponent', () => {
  let component: LongSliderItemComponent;
  let fixture: ComponentFixture<LongSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongSliderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
