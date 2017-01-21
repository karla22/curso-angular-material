import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-radio',
  templateUrl: './test-radio.component.html',
  styleUrls: ['./test-radio.component.css']
})
export class TestRadioComponent implements OnInit {
  estaciones = [
    'Primavera', 
    'Verano', 
    'Otono', 
    'Invierno'];

  constructor() { }

  ngOnInit() {
  }

}
