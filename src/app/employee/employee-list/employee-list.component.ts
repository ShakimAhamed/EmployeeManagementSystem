import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employeeList: any;
  finalList: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.employeeList = this.route.snapshot.data;
    let list:any = this.employeeList.data; 
    if(list == 'Data not found') {
      this.finalList = [];
    }
    else{
      this.finalList = list.data;
    } 
  }
}
 