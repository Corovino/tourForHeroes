import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../Hero';
import { HeroServiceService } from '../hero-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers : [ HeroServiceService ]
})
export class HeroesComponent implements OnInit {

      
   heroes : any;
   selectHero : Hero;

   constructor(private heroService : HeroServiceService, private router : Router){

   }

   ngOnInit() :void
   {
   	  this.getHeroes();
   }

   onSelectedHero(hero : Hero): void 
   {
   	  this.selectHero = hero;
   	  console.log(this.selectHero);		
   } 

   getHeroes() : void 
   {
   	  //return Promise.resolve(HEROES);
   	  this.heroService.getHeroes().then( heroes => this.heroes = heroes);
   	   console.log(this.heroes);
   }

   add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectHero = null;
        });
  }

  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectHero === hero) { this.selectHero = null; }
      });
  }


   gotoDetail(): void
   {
      this.router.navigate([ '/detail', this.selectHero.id]);
   }

}
