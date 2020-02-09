import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  // templateUrl: './classbinding.component.html',
  template: `
    <h3>{{ title }}</h3>
    <button class="btn btn-primary" [class.active]="isActive">Button1</button>
    <button class="btn btn-danger" [class.dangerous]="isDangerous">Nuke</button>
  `,
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  title = 'class binding title';
  isActive = 'true';
  isDangerous = 'true';
  constructor() { }

  ngOnInit() {
  }

}
