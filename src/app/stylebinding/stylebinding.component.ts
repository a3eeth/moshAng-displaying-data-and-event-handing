import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  // templateUrl: './stylebinding.component.html',
  template: `
  <h3>{{ title }}</h3>
  <button class="btn" [style.backgroundColor]="isActive ? 'blue' : 'red'">Save</button>
  `,
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  title = 'style binding title';
  isActive = false;
  constructor() { }

  ngOnInit() {
  }

}
