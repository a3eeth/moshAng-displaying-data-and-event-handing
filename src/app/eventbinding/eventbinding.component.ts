import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  // templateUrl: './eventbinding.component.html',
  template: `
    <h3>{{ title }}</h3>
    <div (click)="divClick()">
    <button (click)="onSave($event)">onsavebutton</button>
    </div>
  `,
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  title = 'event binding title';
  onSave($event){
    // this keeps the event from bubbling and contains it 
    $event.stopPropagation();
    console.log($event + ' was triggered');
  }
  divClick(){
    console.log('div was clicked');
  }
  constructor() { }

  ngOnInit() {
  }

}
