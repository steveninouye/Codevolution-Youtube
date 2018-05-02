import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

<div [ngSwitch]="color">
<div *ngSwitchCase="'red'">You picked red color</div>
<div *ngSwitchCase="'blue'">You picked blue color</div>
<div *ngSwitchCase="'green'">You picked green color</div>
<div *ngSwitchDefault>Pick Again</div>
</div>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  color = 'bl';

  constructor() {}

  ngOnInit() {}
}
