import { Component, OnInit } from '@angular/core';
import { MovieResult } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  movies: MovieResult[] = [];

  constructor(private ms: MoviesService) {}

  ngOnInit(): void {
    this.ms.movies().subscribe((dati) => (this.movies = dati.results));
  }
}
