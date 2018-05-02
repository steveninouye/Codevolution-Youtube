import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = 'Codevolution';
  message = 'Welcome to codevolution';
  person = {
    firstName: 'John',
    lastName: 'Doe'
  };

  date = new Date();

  constructor() {}

  ngOnInit() {}
}
