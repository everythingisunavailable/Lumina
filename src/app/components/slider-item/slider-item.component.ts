import { AfterViewInit, Component, input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-slider-item',
  imports: [],
  templateUrl: './slider-item.component.html',
  styleUrl: './slider-item.component.scss'
})
export class SliderItemComponent implements AfterViewInit{
  movie = input.required<Movie>();
  constructor(private parent: SliderComponent){}

  ngAfterViewInit(): void {
      this.parent.initSlides();
  }
}
