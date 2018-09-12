import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  responseData: boolean;
  validation: boolean;
  jsonData: JSON;
  projectName: string;
  startDate: string;
  endDate: string;
  taskPriority: number;
  managerId: number;
  dateValidation: boolean;
  projectData: JSON;

  constructor(private _service: SharedService) {
    this._service.Get_Users().subscribe(p => this.jsonData = p);
    this._service.Get_Projects().subscribe(p => this.projectData = p);
  }
  AddProject() {
    if (this.managerId != undefined && this.projectName != undefined && this.endDate != undefined && this.startDate != undefined && this.taskPriority != undefined) {
      if (this.endDate >= this.startDate) {
        this.dateValidation = true;
        this.validation = true;
        this._service.Add_Project(this.projectName, this.startDate, this.endDate, this.taskPriority, this.managerId)
          .subscribe(p => this.responseData = p);
          this._service.Get_Projects().subscribe(p => this.projectData = p);
      }
      else {
        this.dateValidation = false;        
      }
    }
    else {
      this.validation = false;
    }

  }
  reset() {
    this.projectName = null;
    this.startDate = null;
    this.endDate = null;
    this.taskPriority = 0;
    this.managerId = null;
  }
  ngOnInit() {
    this.taskPriority = 0;
  }

}
