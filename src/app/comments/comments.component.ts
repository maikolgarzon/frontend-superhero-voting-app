import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from './comments.service';
import { Comments } from './comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public idHero!: any;
  public alias!:any;
  public comments!: Comments[];
  currentPage = 1;

  constructor(private route: ActivatedRoute, private commentsService: CommentsService ) { }

  ngOnInit() {
    //el parametro debe coincidir con el declarado en el app-routing module
    //{path: 'comments/:idHero', component: CommentsComponent},
    this.idHero = this.route.snapshot.paramMap.get('idHero');
    
    //este parametro opcional debe concidir con el declarado en el routerlink del html
    //<a routerLink="/comments/{{hero.id}}" [queryParams]="{ 'alias': hero.alias }" ...>
    this.alias = this.route.snapshot.queryParamMap.get('alias');
    this.findAllComments();
  }

  findAllComments(){
    this.commentsService.findAllComments(this.idHero).subscribe(
      (list) => this.comments = list
    )
  }


}
