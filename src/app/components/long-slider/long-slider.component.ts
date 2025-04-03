import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, input} from '@angular/core';
import { Movie } from '../../models/movie.model';
import { GetMoviesService } from '../../services/get-movies.service';
import { LongSliderItemComponent } from '../long-slider-item/long-slider-item.component';

@Component({
  selector: 'app-long-slider',
  imports: [LongSliderItemComponent],
  templateUrl: './long-slider.component.html',
  styleUrl: './long-slider.component.scss'
})
export class LongSliderComponent implements AfterViewInit {
  contentType = input('popular_movies');
  items: Movie[] = [];
  private movieService = inject(GetMoviesService);

  constructor(private el : ElementRef, private cdr: ChangeDetectorRef){}
  
  ngAfterViewInit(){
       if (this.contentType() == 'popular_movies') {
         this.movieService.getPopularMovies().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'top_rated_movies'){    
         this.movieService.getTopRated().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'upcoming_movies'){
         this.movieService.getUpcoming().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'now_playing_movies'){
         this.movieService.getNowPlaying().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'trending_movies'){
         this.movieService.getTrending().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'popular_tv'){
         this.movieService.getPopularTv().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'top_rated_tv'){
         this.movieService.getTopRatedTv().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'now_playing_tv'){
         this.movieService.getNowPlayingTv().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'upcoming_tv'){
         this.movieService.getUpcomingTv().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'trending_tv'){
         this.movieService.getTrendingTv().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'popular_anime'){
         this.movieService.getPopularAnime().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'top_rated_anime'){
         this.movieService.getTopRatedAnime().subscribe( data => {
           this.items = data.results;
         });
       }
       else if(this.contentType() == 'new_anime'){
        this.movieService.getNewAnime().subscribe( data => {
          this.items = data.results;
          console.log(data.results);
          
        });
       }
       else if(this.contentType() == 'trending_anime'){
        this.movieService.getTrendingAnime().subscribe( data => {
          this.items = data.results;
        });
       }
    this.cdr.detectChanges();
  }

}
