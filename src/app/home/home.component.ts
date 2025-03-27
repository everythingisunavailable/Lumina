import { Component } from '@angular/core';
import { SliderComponent } from '../components/slider/slider.component';
import { LongSliderComponent } from "../components/long-slider/long-slider.component";

@Component({
  selector: 'app-home',
  imports: [SliderComponent, LongSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
