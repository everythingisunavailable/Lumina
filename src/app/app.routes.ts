import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { AnimeComponent } from './anime/anime.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'movie', component: MovieComponent},
    {path: 'tv', component: TvComponent},
    {path: 'anime', component: AnimeComponent},
    {path: '**', component: HomeComponent},
];
