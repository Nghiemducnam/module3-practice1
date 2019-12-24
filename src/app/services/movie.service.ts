import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.class";
@Injectable()
export class MovieService {
  public movies: Movie[] = [
    new Movie(
      1,
      "Lạc trôi",
      "Sơn Tùng MTP",
      " https://www.youtube.com/watch?v=Llw9Q6akRo4"
    ),
    new Movie(
      2,
      "em của ngày hôm qua",
      "Sơn Tùng MTP",
      " https://www.youtube.com/watch?v=5iMx3tlpFeY"
    ),
    new Movie(
      3,
      "Lạc trôi",
      "Sơn Tùng MTP",
      " https://www.youtube.com/watch?v=Llw9Q6akRo4"
    )
  ];

  getAllMovie() {
    return this.movies;
  }
  addMovie(movie: Movie) {
    movie.id = this.getLastId(this.movies);
    this.movies.push(movie);
  }
  getLastId(movies) {
    let lastId =
      movies.length > 0
        ? movies.sort((a, b) => {
            if (a.id > b.id) return -1;
            else if (a.id < b.id) return 1;
            else return 0;
          })[0].id + 1
        : 1;
    return lastId;
  }
  constructor() {}
}
