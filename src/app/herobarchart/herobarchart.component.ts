import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { VoteCounter } from './votecounter';
Chart.register(...registerables)

import { HerobarcharService } from './herobarchar.service';

@Component({
  selector: 'app-herobarchart',
  templateUrl: './herobarchart.component.html',
  styleUrls: ['./herobarchart.component.css']
})
export class HerobarchartComponent implements OnInit {

  public heroes!: VoteCounter[];
  constructor(private barCharService: HerobarcharService) { }

  ngOnInit(): void {
   // this.voteslist();
    this.getVotes();
    // console.log(this.votes)
  }
  voteslist(): void {
    this.barCharService.countVotes().subscribe(
      (list) => { this.heroes = list }
    );
  }
  getVotes(): void {
    this.barCharService.countVotes().subscribe(
      (listVotes) => {
        this.heroes = listVotes;

        const nChart = new Chart(('graphic'),
          {
            type: 'bar',
            data: {
              labels: this.heroes.map(row => row.alias),
              datasets: [
                {
                  label: 'Total hero votes',
                  data: this.heroes.map(row => row.votes)
                }
              ]
            }
          }
        );
      }
    );
  }
}
