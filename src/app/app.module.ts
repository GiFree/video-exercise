import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateViewComponent } from './template-view/template-view.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RecentMovieListComponent } from './recent-movie-list/recent-movie-list.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateViewComponent,
    SearchMovieComponent,
    MovieListComponent,
    RecentMovieListComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
