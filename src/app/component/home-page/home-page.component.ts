import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  

  public employeeCount: number = 0; 
  public employeeDetails: Employee[] = [];
  
  constructor(private httpService:HttpService,
                private router: Router,
                private dataService: DataService) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(data => {
      this.employeeDetails = data.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
  }

  remove(empId: number): void {
    console.log(empId)
    this.httpService.deleteEmployeeData(empId).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }

  update(employee: Employee): void {
    this.dataService.changeEmployee(employee);
    this.router.navigateByUrl('/add-user/' + employee.empId);
    this.httpService.updateEmployeData(employee.empId, employee).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }

}
