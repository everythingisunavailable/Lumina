import { AfterViewInit, Directive, effect, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appSlide]'
})
export class SlideDirective{
  currIndex = input<number>(0);
  slides = input<Array<HTMLElement>>([]);
  
  constructor(private el: ElementRef) {
    effect(()=> {
      if (this.slides().length > 0) {
        this.el.nativeElement.style.transform = `translateX(${-this.currIndex() * this.slides()[0].offsetWidth}px)`;
        this.style();
      }
    });
  }

  private style():void{
    if (this.slides().length > 0) {
      const index = this.currIndex();
      
      for (let i = 0; i < this.slides().length; i++) {
        if (index == i) {
          this.slides()[i].style = 'transform: translateX(0) rotateY(0);'; 
        }
        else if (i < index) {
          this.slides()[i].style = 'transform: translateX(7vw) rotateY(20deg);';
        }
        else{
          this.slides()[i].style = 'transform: translateX(-7vw) rotateY(-20deg);';
        }
        
      }
    }
  }
  
}
