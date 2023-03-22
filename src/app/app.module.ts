import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { OmdbApiService } from './services/omdb-api.service';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SearchtitleComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    SearchtitleComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [OmdbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
