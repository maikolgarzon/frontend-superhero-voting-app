import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HeroVote } from './HeroVote';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private urlEndPoint:string = "http://localhost:8080/api/hero";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.urlEndPoint + '/list');
  }
  
  getHeroByAlias(alias:string): Observable<Hero>{
    return this.http.get<Hero>(this.urlEndPoint + '/' + alias);
  }

  saveHeroVote(alias:string, vote : HeroVote): Observable<HeroVote>{
    return this.http.post<HeroVote>(this.urlEndPoint + "/vote/" + alias, vote,  {headers: this.httpHeaders});
  }

}
