import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstButtonComponent } from "./first-button/first-button.component";
import { SecondButtonComponent } from "./second-button/second-button.component";
import { ButtonServiceService } from "./services/button-service.service";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieService } from "./services/movie.service";
import { MovieAddComponent } from "./movie-add/movie-add.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FirstButtonComponent,
    SecondButtonComponent,
    MovieListComponent,
    MovieAddComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
