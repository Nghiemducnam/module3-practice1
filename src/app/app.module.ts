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
import { TemplateReferVarComponent } from './template-refer-var/template-refer-var.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstButtonComponent,
    SecondButtonComponent,
    MovieListComponent,
    MovieAddComponent,
    TemplateReferVarComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
