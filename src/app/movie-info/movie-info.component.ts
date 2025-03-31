import { AfterViewInit, Component, effect, inject, OnInit, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.model';
import { GetMoviesService } from '../services/get-movies.service';
import { LongSliderComponent } from '../components/long-slider/long-slider.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-info',
  imports: [],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss'
})
export class MovieInfoComponent implements OnInit, AfterViewInit{
  movie = signal<Movie | null>(null);
  private movieService = inject(GetMoviesService);
  trailerUrl: SafeResourceUrl | null = null;
  
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer){
    effect( ()=>{
      this.movie()?.videos.results.forEach(element => {
        if( element.type.toLowerCase() == 'trailer'){
          this.setTrailer(element.key);
        }
      });
    });
  }
  
  setTrailer(videoId: string) {
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    this.trailerUrl = safeUrl;
  }

  goToImdb():void{
    if (this.movie()?.imdb_id) window.location.href = `https://www.imdb.com/title/${this.movie()?.imdb_id}/`;
  }

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