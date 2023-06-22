import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectionheroComponent } from './selectionhero/selectionhero.component';
import { HerodataComponent } from './herodata/herodata.component';
import { HerobarchartComponent } from './herobarchart/herobarchart.component';
import { CommentsComponent } from './comments/comments.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

const routes: Routes = [
  {path: '', component: SelectionheroComponent},
  {path: 'vote', component: SelectionheroComponent},
  {path: 'herodata', component: HerodataComponent},
  {path: 'herobarchart', component: HerobarchartComponent},
  {path: 'comments/:idHero', component: CommentsComponent},
  {path: 'suggestions', component: SuggestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
