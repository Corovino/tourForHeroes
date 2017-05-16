import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent  {

   public title : string;

   constructor()
   {
      this.title = "Tour for Heroes";
   }
  	 
  
}


