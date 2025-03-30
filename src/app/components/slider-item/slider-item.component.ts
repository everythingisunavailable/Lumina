import { AfterViewInit, Component, input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { SliderComponent } from '../slider/slider.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slider-item',
  imports: [],
  templateUrl: './slider-item.component.html',
  styleUrl: './slider-item.component.scss'
})
export class SliderItemComponent implements AfterViewInit{
  movie = input.required<Movie>();
  constructor(private parent: SliderComponent, private route: ActivatedRoute, private router: Router){}

  ngAfterViewInit(): void {
      this.parent.initSlides();
  }

  goToMovie(): void{
    if (!this.route.snapshot.url[0]) {      
      if (this.movie().name) {
        //redirect with category tv
        this.router.navigate(['tv/', this.movie().id]);
        console.log('searching in category tv');
      }
      if (this.movie().title) {
        //redirect category movie
        this.router.navigate(['movie/', this.movie().id]);
      }
    }
    else{
      this.router.navigate([this.movie().id]);
    }
  }
}
