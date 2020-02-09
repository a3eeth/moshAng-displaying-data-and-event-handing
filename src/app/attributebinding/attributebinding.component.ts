import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  // templateUrl: './attributebinding.component.html',
  template: `
    <h3>{{ title }}</h3>
    <table>
      <tr>
        <td [attr.colspan]="colSpan">
          x
        </td>
      </tr>
    </table>
  `,
  styleUrls: ['./attributebinding.component.css']
})
export class AttributebindingComponent implements OnInit {
  title = 'attribute binding title';
  colSpan = 2;

  imageURL = 'https://angular.io/assets/images/logos/angular/shield-large.svg';

  constructor() { }

  ngOnInit() {
  }

}
