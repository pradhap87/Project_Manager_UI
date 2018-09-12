import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  jsonData: JSON;
  responseData :boolean;   
  validation :boolean;   
  projectData: JSON;
  parentTaskData: JSON;
  Project_ID:number; 
  taskDescription:string;
  startDate:string;
  endDate:string;
  paerntTask:boolean;
  Parent_ID:number;
  taskPriority:number;
  Status:String;
  dateValidation: boolean;
  
  constructor(private _service: SharedService) {     
    this._service.Get_Projects().subscribe(p => this.projectData = p);
    this._service.Get_ParentTask().subscribe(p => this.parentTaskData = p);  
  }
  AddTask()
  {    
    if(this.Project_ID !=undefined && this.taskDescription!=undefined && this.endDate !=undefined && this.startDate != undefined && this.taskPriority != undefined)
    {
      this.validation=true;     
      if (this.endDate >= this.startDate) {
        this.dateValidation = true;
      this._service.Add_Task(this.Parent_ID, this.Project_ID,this.taskDescription, this.startDate, this.endDate, this.taskPriority, this.Status)
      .subscribe(p => this.responseData = p);
         this._service.Get_Projects().subscribe(p => this.projectData = p);
    this._service.Get_ParentTask().subscribe(p => this.parentTaskData = p);  
      }
      else{
        this.dateValidation = false;
      }
    }
    else{
      this.validation=false;
    }   
    if(this.paerntTask == true)
    {
      console.log("Adding New Parent Task");      
      this.Status="Parent";
      this.taskPriority=null;
      this.validation=true;   
      this._service.Add_Task(this.Parent_ID, this.Project_ID,this.taskDescription, this.startDate, this.endDate, this.taskPriority, this.Status)
      .subscribe(p => this.responseData = p);
      this._service.Get_Projects().subscribe(p => this.projectData = p);
      this._service.Get_ParentTask().subscribe(p => this.parentTaskData = p);  
    }

  }
  reset()
  {
    this.Project_ID=null;
  this.startDate=null;
  this.endDate=null;
  this.taskPriority=0;
  this.Parent_ID=null;
  this.taskDescription=null;
  }
  ngOnInit() {
    this.taskPriority=0;
  }

}
