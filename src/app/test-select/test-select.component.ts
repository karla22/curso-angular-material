import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  // template: `<h1>Hola</h1>`,
  styleUrls: ['./test-select.component.css']
})
export class TestSelectComponent implements OnInit {

  diaSeleccionado: string;
  dias = [
    {index: 0, valor: 'Lunes'},
    {index: 1, valor: 'Martes'},
    {index: 2, valor: 'Miercoles'},
    {index: 3, valor: 'Jueves'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
