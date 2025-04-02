export interface Season {
  id: number;
  season_number: number;
  name: string;
  overview: string;
  air_date: string;
  episode_count: number;
  poster_path: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
}

export interface Actor{
  adult: boolean;
cast_id: string;
character: string;
credit_id: string;
gender: string;
id: string;
known_for_department : string;
name: string;
order: string; 
original_name: string;
popularity: string;
profile_path: string;
}


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
    videos: {results: Video[]};
    imdb_id: string | null;
    credits: {cast: Actor[], crew: Actor[]};
    seasons: Season[];
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
  