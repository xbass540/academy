import { Component, OnInit, Input } from '@angular/core';
import { MYCOURSE } from '../model/course';
import { COURSES } from '../data/info';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  @Input()
  course:MYCOURSE;
  

  constructor() { }

  ngOnInit() {
  }

}
