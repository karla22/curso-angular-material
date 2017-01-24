import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-component',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}
  `,
  styleUrls: ['./click-component.component.css']
})
export class ClickComponentComponent implements OnInit {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  
  constructor() { }

  ngOnInit() {
  }

}
