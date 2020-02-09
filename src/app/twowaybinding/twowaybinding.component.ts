import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-twowaybinding',
  // templateUrl: './twowaybinding.component.html',
  template: `
  <h3>{{ title }}</h3>
  <!-- this is more procedural programming than obejct oriented -->
  <!-- <input #twb (keyup.enter)="twbFunction(twb.value)" /> -->
  <!-- <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" /> -->

  <!-- the best way to do two way binding BANANA IN A BOX [()] -->
  <!-- import ReactiveFormsModule + FormsModule in app.module.ts from '@angular/forms' -->
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `,
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  title = 'two way binding title';
  email = 'some@email.com';

  onKeyUp() {
    console.log(this.email);
  }
  // even the function can be simplified
  // twbFunction(twb){
  //   console.log(twb);
  // }
  constructor() { }

  ngOnInit() {
  }

}
