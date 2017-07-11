import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Movie } from './movieList';
@Injectable()
export class MovieService {


constructor(private http: Http) {}
// getMovies(movieName: string) {
// return this.http.get(' https://api.themoviedb.org/3/movie/550?api_key=7267b9c119f4e3f790c4ba511aba175e ')
//    .map((response) => response.json().results || []);
//  }

getMovies(movieName: string) {
return this.http.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=' + movieName +
'&language=en-US&api_key=7267b9c119f4e3f790c4ba511aba175e ')
   .map((response) => response.json().results || []);
 }

// getMovies(movieName: string) {
// return this.http.get(' http://localhost:8080/v1/api/movie ')
//    .map((response) => response.json().results || []);
//  }

favMovies() {
    return this.http.get('http://localhost:8080/v1/api/movie/')
    .map((response) => response.json() || []);
}
}
