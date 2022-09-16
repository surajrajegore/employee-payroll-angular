import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  

  public employeeCount: number = 0; 
  public employeeDetails: Employee[] = [];
  
  constructor(private router: Router,) { }

  ngOnInit(): void {
    
  }

  remove(empId: number): void {
    console.log(empId)
  }

  update(employee: Employee): void {
    this.router.navigateByUrl('/add-user/' + employee.empId);
}
}
