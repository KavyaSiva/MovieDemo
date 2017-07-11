import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie/movieList';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie/movie.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-fav-mov',
  templateUrl: './fav-mov.component.html',
  styleUrls: ['./fav-mov.component.css']
})
export class FavMovComponent
 implements OnInit {

 movie: Movie[];

constructor(
private movieService: MovieService,
  private route: ActivatedRoute) {}

ngOnInit() {
this.route.params
    .switchMap((params: Params) => this.movieService.favMovies())
    .subscribe(movie => this.movie = movie);
}

FavMovies() {
this.movieService.favMovies().subscribe(movie => this.movie = movie);
}

}
