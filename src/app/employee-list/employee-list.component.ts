import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
  <h2>Employee List</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [];
  errorMsg;
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe(
        data => (this.employees = data),
        error => (this.errorMsg = error)
      );
  }
}
