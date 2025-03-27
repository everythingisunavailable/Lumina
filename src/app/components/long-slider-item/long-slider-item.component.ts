import { Component, input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-long-slider-item',
  imports: [],
  templateUrl: './long-slider-item.component.html',
  styleUrl: './long-slider-item.component.scss'
})
export class LongSliderItemComponent{
  movie = input.required<Movie>();
  
  constructor(){}
}