export interface Movie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genre_ids: number[];
    genres: Genre[];
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface MovieApiResponse {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
  }
  