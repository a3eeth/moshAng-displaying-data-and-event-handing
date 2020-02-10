import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  // templateUrl: './pipes.component.html',
  template: `
    <h2> {{ title }} </h2>
    {{ courses.title | uppercase | lowercase}} <br />
    {{ courses.rating | number:'1.2-2' }} <br />
    {{ courses.students | number }} <br />
    {{ courses.price | currency:'AUD':true:'3.2-2'  }} <br />
    {{ courses.releaseDate | date:'shortDate' }}`,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title = 'My Amazing Courses';
  courses = {
    title: 'All About Pipes',
    rating: 4.9756,
    students: 100203,
    price: 190.75,
    releaseDate: new Date(2020, 1, 1)
  }
  constructor() { }

  ngOnInit() {
  }

}
