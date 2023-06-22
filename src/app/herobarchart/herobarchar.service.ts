import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VoteCounter } from './votecounter';



@Injectable({
  providedIn: 'root'
})

export class HerobarcharService {

  private urlEndPoint:string = "http://localhost:8080/api/hero";

  constructor(private http: HttpClient) { }

  countVotes():  Observable<VoteCounter[]>{
    return this.http.get<VoteCounter[]>(this.urlEndPoint + '/count-votes');
  }

}
