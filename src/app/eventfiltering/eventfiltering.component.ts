import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventfiltering',
  // templateUrl: './eventfiltering.component.html',
  // template: `
  //   <h3>{{ title }}</h3>
  //   <input (keyup)="onKeyUp($event)"
  // `,
  template: `
    <div>
    <h3>{{ conditionalTestTile }}</h3>
    <input class="filler"/>
    <br>
    <button class="btn btn-danger" (onclick)="tryClicked($event)">try me</button>
    </div>
    <h3>{{ title }}</h3>
    <div>
    <input (keyup)="onKeyUp($event)" />
    <input (keyup.enter)="onKeyUpFiltered()" />
    </div>
  `,
  styleUrls: ['./eventfiltering.component.css']
})
export class EventfilteringComponent implements OnInit {
  title = 'event filtering title';

  // test stuff 
  conditionalTestTile = 'testing starts here';
  tryClicked($event) {
    
  }

  // this needs to use event.keycode + conditional because it has no filtering
  onKeyUp($event){
    $event.keyCode === 13 ? console.log('entered') : console.log('not yet');
  }
  // this is simpler as its only triggered when keyup.enter is hit 
  onKeyUpFiltered() {
    console.log('enter was hit');
  }
  constructor() { }

  ngOnInit() {
  }

}
