import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, signal } from '@angular/core';
import { SliderItemComponent } from '../slider-item/slider-item.component';
import { SlideDirective } from '../../directives/slide.directive';
import { GetMoviesService } from '../../services/get-movies.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-slider',
  imports: [SliderItemComponent, SlideDirective],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit{
  movies: Movie[] = [];
  private movieService = inject(GetMoviesService);

  currIndex = signal<number>(0);
  slides = signal<Array<HTMLElement>>([]);
  
  private startX = 0;
  private touchLength = 30;

  constructor(private el : ElementRef, private cdr: ChangeDetectorRef){

    setInterval(()=>{this.moveRight()},3000);
  }
  
  initSlides(){
    this.slides.set(this.el.nativeElement.querySelectorAll('.slide'));
  }

  ngAfterViewInit(){

     this.movieService.getPopularMovies().subscribe( data => {
       let tmp: Movie[] = data.results;
       this.movies.push(...tmp.slice(0, 4));
     });
     this.movieService.getPopularTv().subscribe( data => {
       let tmp: Movie[] = data.results;
       this.movies.push(...tmp.slice(0, 4));
     });
     this.movieService.getPopularAnime().subscribe( data => {
       let tmp: Movie[] = data.results;
       this.movies.push(...tmp.slice(0, 4));
     });
    
    this.cdr.detectChanges();
  }
  moveRight(){
    this.currIndex.set((this.currIndex() + 1) % this.movies.length);
  }
  moveLeft(){
    this.currIndex.set((this.currIndex() - 1 + this.movies.length) % this.movies.length);
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
