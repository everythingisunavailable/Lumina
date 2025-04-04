import { Component, input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
  movie = input.required<Movie>();
  constructor(public route: ActivatedRoute, private router: Router){};

  goToMovie(): void{
    if (!this.route.snapshot.url[0] || this.route.snapshot.url[0].path == 'anime' || this.route.snapshot.url[0].path == 'search') {      
      if (this.movie().name) {
        //redirect with category tv
        this.router.navigate(['tv/', this.movie().id]);
        console.log('searching in category tv');
      }
      if (this.movie().title) {
        //redirect with category movie
        this.router.navigate(['movie/', this.movie().id]);
      }
    }
    else{
      this.router.navigate([this.route.snapshot.url[0].path ,this.movie().id]);
    }
  }
}
