import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  isActive = true;

  title: 'List of Courses';
  imageURL = 'http://lorempixel.com/400/200';
  colSpan = 2;
  constructor() { }

  ngOnInit() {
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('onsave button was clicked', $event);
  }
  onDivClicked() {
    console.log('div was clicked');
  }
}
