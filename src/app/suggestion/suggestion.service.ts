import { Injectable } from '@angular/core';
import { Suggestion } from './suggestion';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private urlEndPoint:string = "http://localhost:8080/api/hero";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  saveSuggestion(suggestion : Suggestion): Observable<Suggestion>{
    return this.http.post<Suggestion>(this.urlEndPoint + '/suggestion',  suggestion,  {headers: this.httpHeaders});
  }


}
