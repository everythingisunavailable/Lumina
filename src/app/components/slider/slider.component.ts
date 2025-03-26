import { Component, signal } from '@angular/core';
import { SliderItemComponent } from '../slider-item/slider-item.component';
import { SlideDirective } from '../../directives/slide.directive';

@Component({
  selector: 'app-slider',
  imports: [SliderItemComponent, SlideDirective],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  items = ['bullshit','bullshit','bullshit','bullshit','bullshit'];
  currIndex = signal<number>(0);

  private startX = 0;
  private touchLength = 30;
  moveRight(){
    this.currIndex.set((this.currIndex() + 1) % this.items.length);
  }
  moveLeft(){
    this.currIndex.set((this.currIndex() - 1 + this.items.length) % this.items.length);
  }

  onTouchStart(event: TouchEvent){
    this.startX = event.touches[0].clientX; 
  }
  onTouchEnd(event: TouchEvent){
    const touchEndX = event.changedTouches[0].clientX;
    if (touchEndX - this.startX > this.touchLength) {
      this.moveLeft();
    }
    else if(touchEndX - this.startX < -1*this.touchLength){
      this.moveRight();
    }
    
  }
}
