import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  
public employees = [];
data: any = {

  search_type : "District",
  report_type : "REVENUE"

 }

 constructor(private employeedetails : EmployeeServiceService) {



  }

  ngOnInit() {

    this.employees = this.employeedetails.getemp();

  } 

  getreport() {

   this.employeedetails.getData(this.data).subscribe((res) => {
     
      console.log(res.rows);
     
    })
  }


}
