import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroServiceService } from '../hero-service.service';
import { Hero } from '../hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()  hero :Hero; 
  constructor(
    private heroService : HeroServiceService,
    private route : ActivatedRoute,
    private location : Location
  ){
  		console.log(this.hero);
   }

  ngOnInit(): void 
  {
     this.route.params
       .switchMap((params: Params ) => this.heroService.getHero( +params['id'] ) )
       .subscribe(hero => this.hero = hero);
  }
  
  save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}
  goBack(): void 
  {
     this.location.back();
  }

}
