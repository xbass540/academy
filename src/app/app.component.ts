import { Component } from '@angular/core';
import { COURSES } from './data/info';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  card1=COURSES[0];
  card2=COURSES[1];
  card3=COURSES[2];
}
