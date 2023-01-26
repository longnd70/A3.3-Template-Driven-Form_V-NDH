import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  jobCategories = ["Technology", "Social", "Sciences", "Doctor"];
  newEmployee=new Employee(1,"Hoang", new Date("10-25-1979"),"",this.jobCategories[0])
  submitted = false;
  addNewEmplyee(){
    this.newEmployee=new Employee(Math.floor(Date.now()),"", new Date(), "","");
  }
  onSubmit() { 
    this.submitted = true; 
  }
  constructor() {}

  ngOnInit(): void {
  }

}
