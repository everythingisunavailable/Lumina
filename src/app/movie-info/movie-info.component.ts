import { AfterViewInit, Component, effect, inject, OnInit, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Season } from '../models/movie.model';
import { GetMoviesService } from '../services/get-movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EpisodeItemComponent } from '../components/episode-item/episode-item.component';

@Component({
  selector: 'app-movie-info',
  imports: [EpisodeItemComponent],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss'
})
export class MovieInfoComponent implements OnInit, AfterViewInit{

  movie = signal<Movie | null>(null);
  seasons = signal <any | null>(null);
  currentSeasonIndex = signal<number>(1);
  
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

  updateEpisodes(value: string){
    this.currentSeasonIndex.set(parseInt(value));
  }

  ngAfterViewInit(): void {
    window.scrollTo({top: 0});
  }

  getSeasonsFromService():void{
    let i = 0;
    let tmp: Season[] = [];
    this.movie()?.seasons.forEach(element => {
      if (element.name.toLowerCase().includes('season')) {
        this.movieService.getSeasons(i+1, this.movie()?.id!).subscribe( data =>{
          tmp.push(data);
        });
        i++;
      }
    });
    this.seasons.set(tmp); 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      
      const category = params.get('category');
      if (category == 'tv') {
        this.movieService.getTv(params.get('id')).subscribe( data => {
          this.movie.set(data);
          this.getSeasonsFromService();
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