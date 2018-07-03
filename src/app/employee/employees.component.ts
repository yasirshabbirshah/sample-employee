import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector:     'app-employees',
  templateUrl:  './employees.component.html',
  styleUrls:    [ './employees.component.css' ]
})

export class EmployeesComponent implements OnInit {
  employees          = [];
  selectedEmployee   = 0;
  title              = 'Employee List';

  constructor( private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe( employees => this.employees = employees );
  }

  onSelect( selectedEmployee ): void {
    this.selectedEmployee   = this.selectedEmployee === selectedEmployee ? null : selectedEmployee;
  }

  onBioClicked( employee ): void {
    alert( JSON.stringify( employee ) );
  }
}
