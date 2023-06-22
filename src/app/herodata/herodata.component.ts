import { Component, OnInit } from '@angular/core';
import { Hero } from '../selectionhero/hero';
import { HeroService } from '../selectionhero/hero.service';

@Component({
  selector: 'app-herodata',
  templateUrl: './herodata.component.html',
  styleUrls: ['./herodata.component.css']
})
export class HerodataComponent implements OnInit {
  public heroes!: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.findAllHeroes()
  }

  public findAllHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (streamHero) => this.heroes = streamHero
    );
  }

}
