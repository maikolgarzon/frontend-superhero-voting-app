import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroVote } from './HeroVote';
import { HeroService } from './hero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-selectionhero',
  templateUrl: './selectionhero.component.html',
  styleUrls: ['./selectionhero.component.css']
})

export class SelectionheroComponent implements OnInit {
  public actualHero: Hero = new Hero();
  public newVote: HeroVote = new HeroVote();
  public heroesList!: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.findAllHeroes();
  }

  public findAllHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (streamHero) => this.heroesList = streamHero
    );
  }

  saveHeroVote(alias: string) {
    
    if (!this.newVote.username) {
      Swal.fire(
        'Error saving your vote',
        'the username field cannot be empty.',
        'error'
      )
      return;
    }

    this.heroService.saveHeroVote(alias, this.newVote).subscribe(() => {
      Swal.fire(
        'Vote saved',
        'your vote has been successfully saved',
        'success'
      ).then(() => {
        window.location.reload();
      })
    });
  }

  chunkArray(list: any[], chunkSize: number) {
    const chunks = [];
    for (let i = 0; i < list.length; i += chunkSize) {
      chunks.push(list.slice(i, i + chunkSize));
    }
    return chunks;
  }

  openModal(alias: string) {
    this.heroService.getHeroByAlias(alias).subscribe({
      next: (heroData) => this.actualHero = heroData,
      error: (error) => console.log(error)
    });
  }

}
