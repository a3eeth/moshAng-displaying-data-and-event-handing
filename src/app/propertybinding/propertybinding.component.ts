import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  // templateUrl: './propertybinding.component.html',
  template: `
    <h2>{{ title }}</h2>
    <em>{{ message }}</em>
    <img src="{{ imageURL }}" />
    <h4>{{ message2 }}</h4>
    <img [src]="imageURL" />
  `,
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  title = 'property binding title';
  message = 'this image was bound with curly braces img src="{{ image }}" ';
  message2 = 'and this was done with square braces img [src]="image"';
  imageURL = 'https://angular.io/assets/images/logos/angular/shield-large.svg';

  constructor() { }

  ngOnInit() {
  }

}
