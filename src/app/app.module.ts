import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { SelectionheroComponent } from './selectionhero/selectionhero.component';
import { HerodataComponent } from './herodata/herodata.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HeroService } from './selectionhero/hero.service';
import { HerobarcharService } from './herobarchart/herobarchar.service';
import { CommentsService } from './comments/comments.service';
import { SuggestionService } from './suggestion/suggestion.service';
import { HerobarchartComponent } from './herobarchart/herobarchart.component';
import { CommentsComponent } from './comments/comments.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionheroComponent,
    HeaderComponent,
    FooterComponent,
    HerodataComponent,
    HerobarchartComponent,
    CommentsComponent,
    SuggestionComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: '', component: SelectionheroComponent},
      {path: 'vote', component: SelectionheroComponent},
      {path: 'herodata', component: HerodataComponent},
      {path: 'herobarchart', component: HerobarchartComponent},
      {path: 'comments/:idHero', component: CommentsComponent},
      {path: 'suggestions', component: SuggestionComponent}
    ])
  ],

  providers: [HeroService, HerobarcharService, CommentsService, SuggestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
