import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addingbootstrap',
  // templateUrl: './addingbootstrap.component.html',
  template: `
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button class="btn btn-primary">Primary Button</button>
  `,
  styleUrls: ['./addingbootstrap.component.css']
})
export class AddingbootstrapComponent implements OnInit {
  title = 'added bootstrap';
  description = 'installed bootstrap using npm install bootstrap --save and added to the global stylesheet using @import \"~bootstrap/dist/css/bootstrap.css\"';
  constructor() { }

  ngOnInit() {
  }

}
