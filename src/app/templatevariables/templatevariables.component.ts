import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevariables',
  // templateUrl: './templatevariables.component.html',
  template: `
    <h3>{{ title }}</h3>
    <!-- <input (keyup.enter)="onKeyUp($event)" /> -->
    <input #inputFromField (keyup.enter)="onKeyUp(inputFromField.value)" />
  `,
  styleUrls: ['./templatevariables.component.css']
})
export class TemplatevariablesComponent implements OnInit {
  title = 'template variables title';

  onKeyUp(inputFromField) {
    console.log(inputFromField);
  }
  constructor() { }

  ngOnInit() {
  }

}
