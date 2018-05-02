import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Welcome {{ name }}</h2>
  <input type="text" #myInput>
  <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = 'Codevolution';

  constructor() {}

  ngOnInit() {}

  logMessage(value) {
    console.log(value);
  }
}
