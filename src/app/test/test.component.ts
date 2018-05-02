import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

<div *ngFor="let color of colors; last as f">
  <h2>{{f}} {{color}}</h2>
</div>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  colors = ['red', 'yellow', 'green', 'blue'];

  constructor() {}

  ngOnInit() {}
}
