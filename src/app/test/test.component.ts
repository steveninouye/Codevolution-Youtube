import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

<h2>{{"Hello " + name}}
</h2>
<button (click)="fireEvent()">Send Event</button>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') public name;
  @Output() childEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  fireEvent() {
    this.childEvent.emit('Hey Codevolution');
  }
}
