import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './comments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private urlEndPoint:string = "http://localhost:8080/api/hero";

  constructor(private http: HttpClient) { }

  findAllComments(idHero: number):  Observable<Comments[]>{
    return this.http.get<Comments[]>(this.urlEndPoint + '/comments/' + idHero);
  }


}
