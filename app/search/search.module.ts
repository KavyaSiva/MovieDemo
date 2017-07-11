import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from '../movie/movie-detail.component';
import { FavMovComponent } from '../fav-mov/fav-mov.component';


@NgModule({
  declarations:
  [
    SearchComponent
  ],
  imports: [ CommonModule, RouterModule.forRoot([
      {
        path: 'movie-detail/:movieName',
        component: MovieDetailsComponent
      },
      {
        path: 'fav-mov',
        component: FavMovComponent
      }
      ])
   ],
  exports: [ SearchComponent ]
})

export class SearchModule { }
