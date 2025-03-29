import { AfterViewInit, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { Movie } from '../models/movie.model';
import { GetMoviesService } from '../services/get-movies.service';
import { MovieItemComponent } from '../components/movie-item/movie-item.component';
import { LongSliderComponent } from '../components/long-slider/long-slider.component';

@Component({
  selector: 'app-tv',
  imports: [MovieItemComponent, LongSliderComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.scss'
})
export class TvComponent implements AfterViewInit{
  items = signal<Movie[]>([]);
  currPageIndex: number = 1;
  private service = inject(GetMoviesService);

  @ViewChild('discover') discoverTop: ElementRef | undefined;
  
  constructor(){
    this.getTvByPage(this.currPageIndex);
  }
  ngAfterViewInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


  //alternatively i could have declared index as a signal and then use an effect() func to update automatically
  prevPage():void{
    if (this.currPageIndex <= 1) return;
    this.currPageIndex --;
    this.getTvByPage(this.currPageIndex);
    const top = this.discoverTop?.nativeElement;
    top.scrollIntoView();
  }
  nextPage():void{
    this.currPageIndex ++;
    this.getTvByPage(this.currPageIndex);
    const top = this.discoverTop?.nativeElement;
    top.scrollIntoView();
  }
  resetPage():void{
    this.currPageIndex = 1;
    this.getTvByPage(this.currPageIndex);
    const top = this.discoverTop?.nativeElement;
    top.scrollIntoView();
  }
  
  private getTvByPage(page:number):void{
    this.service.discoverTv(page).subscribe((data)=>{
      this.items.set(data.results);
    });
  }

}
