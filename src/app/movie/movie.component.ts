import { Component } from '@angular/core';
import { LongSliderComponent } from "../components/long-slider/long-slider.component";

@Component({
  selector: 'app-movie',
  imports: [LongSliderComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {

}
