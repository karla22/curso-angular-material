import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  // templateUrl: './event.component.html',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  values = '';

  onKey(event:any) {
    console.log('event', event);
    this.values += event.target.value + ' | ';
  }

  constructor() { }

  ngOnInit() {
  }

}
