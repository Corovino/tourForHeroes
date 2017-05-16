import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroServiceService } from '../hero-service.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public dashboard : string;
  public heroes : Hero[] =[];
  constructor( private heroService: HeroServiceService) 
  {
      this.dashboard = 'Bienvenidos al dashboard';   
  }

  ngOnInit(): void
  {
     this.heroService.getHeroes()
      .then( heroes => {
        this.heroes = heroes.slice(1,5);
        console.log(this.heroes);
      });
  }

}
