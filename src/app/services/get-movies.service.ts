import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {
  private key = '';  //API key form TMDB required
  constructor(private http: HttpClient) {}

  getMovie(movieId: string | null): Observable<any>{
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.key}&append_to_response=videos,credits`;

    const sessionData: string | null = sessionStorage.getItem(`movie_${movieId}`);
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      if (data) sessionStorage.setItem(`movie_${movieId}`, JSON.stringify(data));
        console.log(data);
    });

    return apiData;
  }

  getTv(movieId: string | null): Observable<any>{
    const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${this.key}&append_to_response=videos,credits`;

    const sessionData: string | null = sessionStorage.getItem(`movie_${movieId}`);
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      if (data) sessionStorage.setItem(`movie_${movieId}`, JSON.stringify(data));
        console.log(data);  
    });

    return apiData;
  }
  
  getPopularMovies():Observable<any>{
    const url = 'https://api.themoviedb.org/3/movie/popular';

    const sessionData: string | null = sessionStorage.getItem('popular_movies');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('popular_movies', JSON.stringify(data));
    });

    return apiData;
  }
  
  getNowPlaying():Observable<any>{
    const url = 'https://api.themoviedb.org/3/movie/now_playing';

    const sessionData: string | null = sessionStorage.getItem('now_playing_movies');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('now_playing_movies', JSON.stringify(data));
    });

    return apiData;
  }

  getTopRated():Observable<any>{
    const url = 'https://api.themoviedb.org/3/movie/top_rated';

    const sessionData: string | null = sessionStorage.getItem('top_rated_movies');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('top_rated_movies', JSON.stringify(data));
    });

    return apiData;
  }
  
  getUpcoming():Observable<any>{
    const url = 'https://api.themoviedb.org/3/movie/upcoming';

    const sessionData: string | null = sessionStorage.getItem('upcoming_movies');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('upcoming_movies', JSON.stringify(data));
    });

    return apiData;
  }
  getTrending():Observable<any>{
    const url = 'https://api.themoviedb.org/3/trending/movie/week';

    const sessionData: string | null = sessionStorage.getItem('trending_movies');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('trending_movies', JSON.stringify(data));
    });

    return apiData;
  }

  discoverMovies(page:number):Observable<any>{
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&page=${page}`;

    const sessionData: string | null = sessionStorage.getItem(`movie_page_${page}`);
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      if(data) sessionStorage.setItem(`movie_page_${page}`, JSON.stringify(data));
    });

    return apiData;
  }



  // TV shows
  getPopularTv():Observable<any>{
    const url = 'https://api.themoviedb.org/3/tv/popular';

    const sessionData: string | null = sessionStorage.getItem('popular_tv');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('popular_tv', JSON.stringify(data));
    });

    return apiData;
  }
  
  getNowPlayingTv():Observable<any>{
    const url = 'https://api.themoviedb.org/3/tv/now_playing';

    const sessionData: string | null = sessionStorage.getItem('now_playing_tv');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('now_playing_tv', JSON.stringify(data));
    });

    return apiData;
  }

  getTopRatedTv():Observable<any>{
    const url = 'https://api.themoviedb.org/3/tv/top_rated';

    const sessionData: string | null = sessionStorage.getItem('top_rated_tv');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('top_rated_tv', JSON.stringify(data));
    });

    return apiData;
  }
  
  getUpcomingTv():Observable<any>{
    const url = 'https://api.themoviedb.org/3/tv/on_the_air';

    const sessionData: string | null = sessionStorage.getItem('upcoming_tv');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('upcoming_tv', JSON.stringify(data));
    });

    return apiData;
  }

  getTrendingTv():Observable<any>{
    const url = 'https://api.themoviedb.org/3/trending/tv/week';  

    const sessionData: string | null = sessionStorage.getItem('trending_tv');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(`${url}?api_key=${this.key}`);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('trending_tv', JSON.stringify(data));
    });

    return apiData;
  }

  discoverTv(page: number): Observable<any>{
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${this.key}&page=${page}`;

    const sessionData: string | null = sessionStorage.getItem(`tv_page_${page}`);
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      if(data) sessionStorage.setItem(`tv_page_${page}`, JSON.stringify(data));
    });

    return apiData;
  }

  getSeasons(index: number, tv_id: number): Observable<any>{
    const url = `https://api.themoviedb.org/3/tv/${tv_id}/season/${index}?api_key=${this.key}`;

    const sessionData: string | null = sessionStorage.getItem(`${tv_id}_season_${index}`);
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      if(data) sessionStorage.setItem(`${tv_id}_season_${index}`, JSON.stringify(data));
    });

    return apiData;
  }


  getPopularAnime():Observable<any>{
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${this.key}&with_genres=16`;

    const sessionData: string | null = sessionStorage.getItem('popular_anime');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('popular_anime', JSON.stringify(data));
    });

    return apiData;
  }

  getTopRatedAnime():Observable<any>{
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${this.key}&with_keywords=210024&sort_by=vote_average.desc&vote_count.gte=100`;

    const sessionData: string | null = sessionStorage.getItem('top_rated_anime');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('top_rated_anime', JSON.stringify(data));
    });

    return apiData;
  }

  getTrendingAnime(){
    const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${this.key}&with_genres=16`;

    const sessionData: string | null = sessionStorage.getItem('trending_anime');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('trending_anime', JSON.stringify(data));
    });

    return apiData;
  }

  getNewAnime(){
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${this.key}&with_genres=16&first_air_date.gte=2025-01-01`;

    const sessionData: string | null = sessionStorage.getItem('new_anime');
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      sessionStorage.setItem('new_anime', JSON.stringify(data));
    });

    return apiData;
  }

  discoverAnime(page: number):Observable<any>{
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${this.key}&with_genres=16&page=${page}`;

    const sessionData: string | null = sessionStorage.getItem(`anime_page_${page}`);
    if (sessionData){
      return of(JSON.parse(sessionData));
    }

    const apiData:Observable<any> = this.http.get<any>(url);

    apiData.subscribe( (data)=>{
      if(data) sessionStorage.setItem(`anime_page_${page}`, JSON.stringify(data));
    });

    return apiData;
  }

}