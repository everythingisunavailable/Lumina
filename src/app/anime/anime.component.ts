import { AfterViewInit, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { Movie } from '../models/movie.model';
import { GetMoviesService } from '../services/get-movies.service';
import { MovieItemComponent } from '../components/movie-item/movie-item.component';
import { LongSliderComponent } from '../components/long-slider/long-slider.component';

@Component({
  selector: 'app-anime',
  imports: [LongSliderComponent, MovieItemComponent],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.scss'
})
export class AnimeComponent implements AfterViewInit{
  items = signal<Movie[]>([]);
  currPageIndex: number = 1;
  private service = inject(GetMoviesService);

  @ViewChild('discover') discoverTop: ElementRef | undefined;
  
  constructor(){
    this.getAnimeByPage(this.currPageIndex);
  }
  ngAfterViewInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


  //alternatively i could have declared index as a signal and then use an effect() func to update automatically
  prevPage():void{
    if (this.currPageIndex <= 1) return;
    this.currPageIndex --;
    this.getAnimeByPage(this.currPageIndex);
    const top = this.discoverTop?.nativeElement;
    top.scrollIntoView();
  }
  nextPage():void{
    this.currPageIndex ++;
    this.getAnimeByPage(this.currPageIndex);
    const top = this.discoverTop?.nativeElement;
    top.scrollIntoView();
  }
  resetPage():void{
    this.currPageIndex = 1;
    this.getAnimeByPage(this.currPageIndex);
    const top = this.discoverTop?.nativeElement;
    top.scrollIntoView();
  }
  
  private getAnimeByPage(page:number):void{
    this.service.discoverAnime(page).subscribe((data)=>{
      this.items.set(data.results);
    });
  }

}
