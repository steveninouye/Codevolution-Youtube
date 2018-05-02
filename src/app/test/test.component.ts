import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 *ngIf="displayName; else elseBlock">Codevlotion</h2>
  <ng-template #elseBlock>
  <h2>Name is hiden</h2>
  </ng-template>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayName = false;

  constructor() {}

  ngOnInit() {}

  logMessage(value) {
    console.log(value);
  }
}
