import { AfterViewInit, Component, inject, OnInit, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.model';
import { GetMoviesService } from '../services/get-movies.service';
import { LongSliderComponent } from '../components/long-slider/long-slider.component';

@Component({
  selector: 'app-movie-info',
  imports: [],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss'
})
export class MovieInfoComponent implements OnInit, AfterViewInit{
  movie = signal<Movie | null>(null);
  
  private movieService = inject(GetMoviesService);
  constructor(private route: ActivatedRoute){}

  ngAfterViewInit(): void {
    window.scrollTo({top: 0});
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      
      const category = params.get('category');
      if (category == 'tv') {
        this.movieService.getTv(params.get('id')).subscribe( data => {
          this.movie.set(data);
        });
      }
      else if (category == 'movie') {
        this.movieService.getMovie(params.get('id')).subscribe( data => {
          this.movie.set(data);
        });
      }
      
    });
  }
}