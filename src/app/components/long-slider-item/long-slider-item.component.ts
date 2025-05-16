import { Component, input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-long-slider-item',
  imports: [],
  templateUrl: './long-slider-item.component.html',
  styleUrl: './long-slider-item.component.scss'
})
export class LongSliderItemComponent{
  movie = input.required<Movie>();
  
  constructor(public route: ActivatedRoute, private router: Router){}

  goToMovie(): void{
    if (!this.route.snapshot.url[0] || this.route.snapshot.url[0].path == 'anime') {      
      if (this.movie().name) {
        //redirect with category tv
        this.router.navigate(['tv/', this.movie().id]);
      }
      if (this.movie().title) {
        //redirect category movie
        this.router.navigate(['movie/', this.movie().id]);
      }
    }
    else{
      this.router.navigate([this.route.snapshot.url[0].path ,this.movie().id]);
    }
  }
}