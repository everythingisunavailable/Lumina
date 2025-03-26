import { AfterViewInit, Directive, effect, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appSlide]'
})
export class SlideDirective implements AfterViewInit {
  currIndex = input<number>(0);
  private slides: HTMLElement[] = [];
  private slideWidth:number = 0;
  
  constructor(private el: ElementRef) {
    effect(()=> {
      this.el.nativeElement.style.transform = `translateX(${-this.currIndex() * this.slideWidth}px)`;
      this.style();
    });
  }

  private style():void{
    if (this.slides.length > 0) {
      const index = this.currIndex();
      
      for (let i = 0; i < this.slides.length; i++) {
        if (index == i) {
          this.slides[i].style = 'transform: translateX(0) rotateY(0);'; 
        }
        else if (i < index) {
          this.slides[i].style = 'transform: translateX(7vw) rotateY(20deg);';
        }
        else{
          this.slides[i].style = 'transform: translateX(-7vw) rotateY(-20deg);';
        }
        
      }
    }
  }

  ngAfterViewInit(): void {
    this.slideWidth = this.el.nativeElement.querySelector('.slide').offsetWidth;
    this.slides = this.el.nativeElement.querySelectorAll('.slide');
    //style the element the first slide
    this.style();
  }
  
}
