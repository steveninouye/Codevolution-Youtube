import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

<div *ngFor="let color of colors; odd as o">
  <h2>{{o}} {{color}}</h2>
</div>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  colors = ['red', 'yellow', 'green', 'blue'];

  constructor() {}

  ngOnInit() {}
}
