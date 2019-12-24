import { Component, OnInit } from "@angular/core";
import { Movie } from "../models/movie.class";
import { MovieService } from "../services/movie.service";

@Component({
  selector: "app-movie-add",
  templateUrl: "./movie-add.component.html",
  styleUrls: ["./movie-add.component.css"]
})
export class MovieAddComponent implements OnInit {
  constructor(public movieService: MovieService) {}

  addMovie(name: string, link: string, author: string) {
    let movie = new Movie(null, name, link, author);
    this.movieService.addMovie(movie);
  }

  ngOnInit() {}
}
