import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { GetMoviesService } from '../services/get-movies.service';
import { Movie } from '../models/movie.model';
import { MovieItemComponent } from '../components/movie-item/movie-item.component';

@Component({
  selector: 'app-search-result',
  imports: [MovieItemComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent {
  service = inject(GetMoviesService);
  movies = signal<Movie[] | null>(null);
  
  currPageIndex: number = 1;
  totalPages: number = 100;
  searchQuery: string = '';

  @ViewChild('discover') discoverTop: ElementRef | undefined;

  search(query: string):void{
    if (query.length > 0) {
      this.searchQuery = query;
      this.currPageIndex = 1;
      this.service.search(query, this.currPageIndex).subscribe( data => {
        this.movies.set(data.results);
        this.totalPages = data.total_pages;
      });
    }
  }
  
  clearPage():void{
    this.currPageIndex = 1;
    this.totalPages = 100;
    this.movies.set(null);
  }

  prevPage():void{
    if (this.currPageIndex <= 1) return;
    this.currPageIndex --;
    this.getMoviesByPage(this.currPageIndex);
    const top = this.discoverTop?.nativeElement;
    top.scrollIntoView();
  }
  nextPage():void{
    if (this.currPageIndex >= this.totalPages) return;
    this.currPageIndex ++;
    this.getMoviesByPage(this.currPageIndex);
    const top = this.discoverTop?.nativeElement;
    top.scrollIntoView();
  }
  resetPage():void{
    this.currPageIndex = 1;
    this.getMoviesByPage(this.currPageIndex);
    const top = this.discoverTop?.nativeElement;
    top.scrollIntoView();
  }
  
  private getMoviesByPage(page:number):void{
    this.service.search(this.searchQuery,page).subscribe((data)=>{
      this.movies.set(data.results);
    });
  }
}
