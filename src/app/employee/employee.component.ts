import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employees: any;
  currentEmployee = null;
  currentIndex = -1;

  constructor(private employeeService: EmployeeService) {
    this.retrieveEmployees();
   }

  ngOnInit() {
  }

  retrieveEmployees() {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveEmployees();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }
}
