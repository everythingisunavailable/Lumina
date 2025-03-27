export interface Movie {
    id: number;
    title: string;
    name: string;
    original_title: string;
    overview: string;
    release_date: string;
    first_air_date: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genre_ids: number[];
    genres: Genre[];
    origin_country: string[];
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
  