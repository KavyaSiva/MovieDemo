import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { FavMovComponent } from '../fav-mov/fav-mov.component';
@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private router: Router) {}

FavMovies() {
    this.router.navigate(['fav-mov']);
}
}

