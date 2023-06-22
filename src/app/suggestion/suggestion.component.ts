import { Component } from '@angular/core';
import { Suggestion } from './suggestion';
import { SuggestionService } from './suggestion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {
  public suggestion: Suggestion = new Suggestion();

  constructor(private suggestionService: SuggestionService){}

  public saveSuggestion():void {
    if(!this.suggestion.username || !this.suggestion.message){
      Swal.fire(
        'Error saving your suggestion',
        'Username or message cannot be empty.',
        'error'
      )
      return;
    }

    this.suggestionService.saveSuggestion(this.suggestion).subscribe(() => {
      Swal.fire(
        'Suggestion saved',
        'your Suggestion has been saved.',
        'success'
      ).then(() => {
        window.location.reload();
      })
    });
  }
}
